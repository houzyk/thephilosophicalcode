const fs = require('fs')
const { prompt } = require('enquirer');

const generateArticle = async () => {

  const questions = [
    {
      type: "input",
      name: "username",
      message: "What is your Github username?",
      validate: async (value) => {
        const response = await fetch(`https://api.github.com/users/${value}`);
        return response.status === 200 || "Github username is invalid or does not exist.";
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
