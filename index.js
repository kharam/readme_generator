// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// licenses
const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";

// TODO: Create an array of questions for user input
// project questions for inquirer to ask
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What do you need to install in order for your application to work?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your application?"
    },
    {
        type: "input",
        name: "tests",
        message: "How would you run tests on this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What type of license would you like?",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "list",
        name: "contributors",
        message: "Would you like other developers to contribute to your project?",
        choices: [
            "Yes",
            "No"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();

inquirer.prompt(questions).then(response => {console.log(response.title)});
