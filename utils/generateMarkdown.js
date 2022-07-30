const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license !== 'null') {
    return `[![${license} License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
      // change these links to where they would be on the page
      return `/n n/`
    }
    if (license === 'Apache_2.0') {
      // change these links to where they would be on the page
      return `/n n/`
    }
    if(license === 'GPLv3') {
      // change these links to where they would be on the page
      return `/n n/`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'null') {
    return `## Licenses 
    This project is currently using this ${license} license.`
  } else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#description)

`;
}

module.exports = generateMarkdown;