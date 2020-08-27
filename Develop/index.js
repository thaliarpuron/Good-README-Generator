const inquirer = require("inquirer");
const fs = require("fs");
const { async } = require("rxjs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt user with questions
const userPrompt = async () => {
    const response = await inquirer.prompt([
        {
            name: "GitHubUsername",
            message: "What is your GitHub username?",
            type: "input"
        },

        {
            name: "email",
            message: "What is your email address?",
            type: "input"
        },

        {
            name: "projectName",
            message: "What is your project's name?",
            type: "input"
        },

        {
            name: "projectDescription",
            message: "Please write a short description of your project",
            type: "input"
        },

        {
            name: "tools",
            message: "What tools were used for your project?",
            type: "input"
        },

        {
            name: "installation",
            message: "What are the installation instructions?",
            type: "input"
        },

        {
            name: "projectUsage",
            message: "How do you use the program?",
            type: "input"
          },

        {
            name: "repoContribution",
            message: "What does the user need to know about contributing to the repo?",
            type: "input"
        },

        {
            name: "license",
            message: "What kind of license should your project have?",
            type: "input"
        },
    ])

    //Write the README file
    await writeFileAsync("./README.md", generateMarkdown(response))

    console.log(response)
}
userPrompt();