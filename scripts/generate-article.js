const fs = require('fs')
const { prompt } = require('enquirer');

const generateArticle = async () => {

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
        const response = await fetch(`https://api.github.com/users/${value}`);
        if (response.status !== 200 ) {
          return "Github username does not exist.";
        }

        return true;
      }
    },
    {
      type: 'input',
      name: 'articleTitle',
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
      }
    }
  ];

  const answers = await prompt(questions);

}

generateArticle();
