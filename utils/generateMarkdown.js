// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}
//
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}
//
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Creating a mark down for the readme
function generateMarkdown(data) {
  return `
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
  
  # **${data.title}**
  # Table of Contents
  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)
  # Project Description
  ${data.description}
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Tests
  ${data.tests}
  # License
  ${data.license}
  # Contributions
  ${data.contributors}
  # Questions
  If you have any questions, please contact me with following email
  
  #### ${
    data.email !== null
      ? "[" + data.email + "](mailto:" + data.email + ")"
      : "This user's email is private."
  }
`;
}

module.exports = generateMarkdown;
