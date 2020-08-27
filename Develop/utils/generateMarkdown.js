function generateRepoName(projectName) {
  const repoName = projectName.split(' ').join('-');
  return `${repoName}`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `

  [![Issues][issues-shield]][issues-url]

  # ${data.projectName}

  Developed by: ${data.GitHubUsername}

  ## Table of Contents
  - [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Support](#support)
  - [Contact](#contact)

  ## About the Project
  ${data.projectDescription}
  ### Built With
  ${data.tools}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.projectUsage}
  ## Contributing
  ${data.repoContribution}
  ## License
  ${data.license}
  ## Support
  Please [open an issue](https://github.com/${data.GitHubUsername}/${generateRepoName(
    data.projectName
  )}/issues/new) for support.
  ### Contact
  Contact ${data.email} with any questions or concerns.
  `;
}

module.exports = generateMarkdown;
