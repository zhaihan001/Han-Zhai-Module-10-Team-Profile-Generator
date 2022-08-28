// Include packages needed for this application
const inquirer = require('inquirer');
const menu = require('inquirer-menu');
const fs = require('fs');
const generateHTML = require('./generateHTML.js');
const Employee = require('./employee.js');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){

    }
    getRole(){
        return 'Engineer';
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.github = github;
    }
    getSchool(){

    }
    getRole(){
        return 'Intern';
    }
}

// Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'Please enter the name of team manager: ',
        name:'managerName',
    },
    {
        type:'input',
        message: 'Please enter the employee ID: ',
        name:'managerId',
    },
    {
        type:'input',
        message: 'Please enter the email address: ',
        name:'managerEmail',
    },
    {
        type:'input',
        message: 'Please enter the office number: ',
        name:'managerOffice',
    },
    {
        type: 'list',
        message: 'Do you want to add a team member',
        name: 'addMember',
        choices: ['Yes', 'No'],
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
