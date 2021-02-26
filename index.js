// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// licenses
const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";

// Check whether the user want to have contributor or not
const yesContributors = "If you would like to contribute to this project, please follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) guidelines."
const noContributors = "This project is currently not accepting any contributions."

// project questions for readme generator
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
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

// simple function to write file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("Readme is generated")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        const data = {
            title: response.title,
            email: response.email,
            description: response.description,
            installation: response.installation,
            usage: response.usage,
            tests: response.tests,
            contributors: response.contributors === "Yes" ? yesContributors : noContributors,
        }

        // Decision for license
        switch (response.license) {
            case "Apache License 2.0":
                data.license = apache
                break;
            case "GNU GPLv3":
                data.license = gnu
                break;
            case "MIT":
                data.license = mit
            case "ISC":
                data.license = isc
            default:
                data.license = "None"
        }

        const out = generateMarkdown(data);

        writeToFile("generateMarkdown.md", out);
    });
}

// Function call to initialize app
init();
