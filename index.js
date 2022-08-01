// TODO: Include packages needed for this application
// declaring reference to element using const for constant reference
// using node.js require statement to access fs, inquirer, generateMarkdown to access the modules functions by the const assignment
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// questions for user input to require title of project, description, installation steps, usage, license, GitHub username, email
const questions =
[
        {
            type: 'input',
            name: 'project',
            message: 'What is the title of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the required steps for a user to install this project (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter the project installation steps!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide the required information for a user to use this application (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to provide user information!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose which license is required for this application (Required)',
            choices: ['MIT', 'Apache_2.0', 'GPLv3'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    return "You have chose to not include a license for your project.";
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Provide your GitHub username (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to provide your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address for future contact support (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to provide a validated email address!');
                    return false;
                }
            }
        }
];


// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        // using writeFile to create a README.md file located in the dist directory
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            // message to alert user that the file was created and where they can find their new file
            resolve({
                ok: true,
                message: 'You can view your README.md file in the dist directory!'
            });
        }) ;
    });
}

// TODO: Create a function to initialize app
// declaring init to return questions data using inquirer
const init = () => {
    return inquirer.prompt(questions)
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(pageReadMe => {
        return writeToFile(pageReadMe);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init()
