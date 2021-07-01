// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const util = require("util")
const fs = require('fs');
// TODO: Create an array of questions for user input

const questions = [
    {
      message: 'What is your project title?',  
      type: 'input',
      name: 'title',
      
    },
    {
      message: 'What is your name?',
      type: 'input',
      name: 'author',
      
    },
    {
      message: 'Write a brief description of the project?',
      type: 'input',
      name: 'description',
      
    },
    
    {
      message: 'Enter how to use the application.',
      type: 'input',
      name: 'usage',
      
    },
    {
      message: 'Is there any contributions?',
      type: 'input',
      name: 'contributions',
     
    },
    {
      message: 'What is the licensing?',
      type: 'list',
      name: 'license',
      choices: ["MIT License", "Mozilla Public License 2.0", "Apache License 2.0", "The Unlicense"],
    },
    {
      message: 'What is your Github username?',
      type: 'input',
      name: 'githubname',
      
    },
    {
      message: 'What is your email address?',
      type: 'input',
      name: 'email',
      
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log('You have successfully created a readme file!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){ 
        const results = generateMarkdown(answers);

        console.log(results)
        writeToFile("readme.md", results)
    })
}

// Function call to initialize app
init();
