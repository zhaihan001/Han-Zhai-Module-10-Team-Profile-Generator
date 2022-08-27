// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js');

// Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'Please enter the title of your project: ',
        name:'title',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: ['MIT', 'ISC'],
    }
];

// Create a function to generate HTML file
function writeToFile(response) {
    fs.writeFile("index.html", generateHTML.generate(response), (err) =>
      err ? console.log(err) : console.log('Team Profile page created')
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => writeToFile(response));
}

// Function call to initialize app
init();
