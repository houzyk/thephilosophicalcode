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
    }
  ];

  const { username,  articleInfo } = await prompt(questions);

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
  const templateCoverPath = path.join("./scripts/templates", "cover.webp");
  const newArticleCoverPath = path.join(newImageDirectoryPath, "cover.webp");
  fs.copyFileSync(templateCoverPath, newArticleCoverPath);

  // Make template article.md
  const templateArticlePath = path.join("./scripts/templates", "article.md");
  const newArticlePath = path.join("./content/articles", `${articleInfo.articleKebabTitle}.md`);
  fs.copyFileSync(templateArticlePath, newArticlePath);

  fs.readFile(newArticlePath, 'utf8', (_, data) => {
    const modifiedContent = data
                            .replaceAll("{#articleNormalTitle}", articleInfo.articleNormalTitle)
                            .replaceAll("{#articleKebabTitle}", articleInfo.articleKebabTitle)
                            .replaceAll("{#githubName}", userInfo.githubName)
                            .replaceAll("{#githubURL}", userInfo.githubURL);

    fs.writeFile(newArticlePath, modifiedContent, 'utf8', () => {});
  });

  } catch (error) {
    console.log("Template creation failed.");
  }

}

generateArticle();
