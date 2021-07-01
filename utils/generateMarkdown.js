// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
 ###Created by: ${data.author}



  # Table of Contents

  * [Description](#description)
  
  * [Installation](#installation)
  
  * [Contribution](#contribution)
  
  * [License](#license)
  
  * [Contacts](#contacts)
  
  ## Description
  ${data.description}

  ## Installation
  Click on the video link and follow the [instructions.](https://youtu.be/rOhJD0Znaeo)
  
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contributions}
  
  ## License
  ${data.license}
  
  ## Contacts
  For additional information, send me an [email](${data.email}) or refer to my [Github](https://github.com/${data.githubname}/)
  
  `
}

module.exports = generateMarkdown;
