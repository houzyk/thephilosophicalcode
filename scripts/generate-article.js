const fs = require('fs');
const path = require('path');
const { prompt } = require('enquirer');
const figlet = require("figlet");

const kebabToNormalCase = (kebabCaseString) => {
  const words = kebabCaseString.split('-');
  const normalCaseString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return normalCaseString;
}

const generateArticle = async () => {

  console.log(figlet.textSync("The Philosophical Code")); // Ascii Art

  let useDefaultCover = true;

  const questions = [
    {
      type: "input",
      name: "username",
      message: "What is your Github username?",
      validate: async (value) => {

        // Checks if username format is valid
        if (!/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,37}$/.test(value)) {
          return "Github username does not have a valid format.";
        }

        // Checks if username exists on Github
        const userStatus = (await fetch(`https://api.github.com/users/${value}`, { method: 'HEAD' })).status;
        if (userStatus !== 200) {
          return "Github username does not exist.";
        }

        return true;
      }
    },
    {
      type: 'input',
      name: 'articleInfo',
      message: "What is your article's title ? (kebab-case-only)",
      validate: (value) => {

        // Checks for kebab case
        if (!(/^[a-z]+(-[a-z]+)*$/.test(value))) {
          return "Title should be in kebab-case.";
        }

        // Checks if article already exists
        if (fs.existsSync(`./content/articles/${value}.md`)) {
          return "Title is already taken. Try another one!";
        }

        return true;
      },
      result: (value) => ({
        articleKebabTitle: value,
        articleNormalTitle: kebabToNormalCase(value)
      })
    },
    {
      type: 'toggle',
      name: "proceed",
      message: "Would you like to use our default article cover for now? You can always change it later.",
      enabled: "Yep",
      disabled: "Nope",
      result: (value) => {
        useDefaultCover = value;
        return value;
      }
    },
    {
      skip: () => useDefaultCover,
      type: 'input',
      name: 'defaultCover',
      initial: "./scripts/templates/cover.webp",
      message: "Please specify the path for the cover you want to use. Type 'skip' if you still want to use the default.",
      validate: (value) => {

        // Checks if cover exist
        if (!fs.existsSync(value === "skip" ? "./scripts/templates/cover.webp" : value)) {
          return "File does not exist. Please verify the path or type 'skip'";
        }

        return true;
      },
      result: (value) => ({
        generalPath: value === "skip"
          ? "./scripts/templates/cover.webp" : value
      })
    }
  ];

  const { username,  articleInfo, defaultCover } = await prompt(questions);

  // get coverFileName and Path from defaultCover.generalPath
  const getCoverPath = (argGeneralPath) => {
    const _path = argGeneralPath.split("/");
    return [_path.slice(0, -1).join("/"), _path.at(-1)];
  };
  [ defaultCover.coverPath, defaultCover.coverFileName ] = getCoverPath(defaultCover.generalPath);


  const userInfo = {
    githubName: username,
    githubURL: `https://github.com/${username}`
  }

  // Get Github name
  const userDataResponse = await fetch(`https://api.github.com/users/${username}`);
  if (userDataResponse.status === 200) {
    const userData = await userDataResponse.json();
    if (userData?.name) {
      userInfo.githubName = userData?.name;
    }
  }


  try {

  // Create folder in image directory
  const newImageDirectoryPath = `./public/images/${articleInfo.articleKebabTitle}`;
  fs.mkdirSync(newImageDirectoryPath, () => {});

  // Copy cover.webp into iamge directory
  const templateCoverPath = path.join(defaultCover.coverPath, defaultCover.coverFileName);
  const newArticleCoverPath = path.join(newImageDirectoryPath, defaultCover.coverFileName);
  fs.copyFileSync(templateCoverPath, newArticleCoverPath);

  // Make template article.md
  const templateArticlePath = path.join("./scripts/templates", "article.md");
  const newArticlePath = path.join("./content/articles", `${articleInfo.articleKebabTitle}.md`);
  fs.copyFileSync(templateArticlePath, newArticlePath);

  // Modify article data
  fs.readFile(newArticlePath, 'utf8', (_, data) => {
    const dateToday = `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}-${new Date().getDate()}`;
    const modifiedContent = data
                            .replaceAll("{#articleNormalTitle}", articleInfo.articleNormalTitle)
                            .replaceAll("{#articleKebabTitle}", articleInfo.articleKebabTitle)
                            .replaceAll("{#githubName}", userInfo.githubName)
                            .replaceAll("{#githubURL}", userInfo.githubURL)
                            .replaceAll("{#coverFileName}", defaultCover.coverFileName)
                            .replaceAll("{#dateToday}", dateToday);

    fs.writeFile(newArticlePath, modifiedContent, 'utf8', () => {});
  });

  // Add user in people data
  const peopleDataStream = fs.readFileSync("./content/people.json");
  const peopleData = JSON.parse(peopleDataStream);
  const doesAuthorExist =peopleData.authors.some((author) => author.url === userInfo.githubURL);

  if (!doesAuthorExist) {
    peopleData.authors.push({
      name: userInfo.githubName,
      url: userInfo.githubURL
    });

    fs.writeFile("./content/people.json", JSON.stringify(peopleData,  null, 2), 'utf8', () => {})
  }


  const result = [
    {
      "File": `Your new article "${articleInfo.articleNormalTitle}".`,
      "Path": newArticlePath
    },
    {
      "File": `the image folder for your article "${articleInfo.articleNormalTitle}".`,
      "Path": newArticleCoverPath
    },
    {
      "File": "Check the people list as well.",
      "Path": "content/people.json"
    },
  ];

  console.table(result);

  } catch (error) {
    console.log("Template creation failed.", error);
  }

}

generateArticle();
