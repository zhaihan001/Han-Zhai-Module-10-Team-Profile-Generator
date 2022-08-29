// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
var managerInfo = {};
var engineerInfo = [];
var internInfo = [];

// Create an array of questions for user input
function addManager() {
    const managerQuestions = [
        {
            type: 'input',
            message: 'Please enter the name of team manager: ',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'Please enter the employee ID: ',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'Please enter the email address: ',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'Please enter the office number: ',
            name: 'managerOffice',
        }
    ]
    inquirer.prompt(managerQuestions)
        .then((response) => {
            managerInfo = new Manager(response.managerName, response.managerId, response.managerEmail, 'Manager', response.managerOffice)
            return addMember();
        })
}

function addMember() {
    const addQuestions = [
        {
            type: 'list',
            message: 'Do you want to add another team member?',
            name: 'addMember',
            choices: ['Add an engineer', 'Add an intern', `No, I'm done`]
        }
    ]
    inquirer.prompt(addQuestions)
        .then((response) => {
            switch (response.addMember) {

                case 'Add an engineer':
                    return addEngineer();

                case 'Add an intern':
                    return addIntern();

                case `No, I'm done`:
                    writeToFile(managerInfo, engineerInfo, internInfo);
                    break;
            }
        })
}

function addEngineer() {
    const engineerQuestions = [
        {
            type: 'input',
            message: 'Please enter the name of team member: ',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Please enter the employee ID: ',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'Please enter the email address: ',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Please enter the gitHub username: ',
            name: 'engineerGithub',
        }
    ]
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const temEngineerinfo = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, 'Engineer', response.engineerGithub)
            engineerInfo.push(temEngineerinfo);
            console.log(engineerInfo);
            return addMember();
        })
}

function addIntern() {
    const internQuestions = [
        {
            type: 'input',
            message: 'Please enter the name of team member: ',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Please enter the employee ID: ',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'Please enter the email address: ',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Please enter the school name: ',
            name: 'internSchool',
        }
    ]
    inquirer.prompt(internQuestions)
        .then((response) => {
            const tempInterninfo = new Intern(response.internName, response.internId, response.internEmail, 'Intern', response.internSchool)
            internInfo.push(tempInterninfo);
            console.log(internInfo);
            return addMember();
        })
}

// Create a function to generate HTML file
function writeToFile(managerInfo, engineerInfo, internInfo) {
    fs.writeFile('./dist/index.html', generateHTML(managerInfo, engineerInfo, internInfo), (err) =>
        err ? console.log(err) : console.log('Team Profile page created')
    );
}

// Create a function to initialize app
function init() {
    addManager()
}

// Function call to initialize app
init();
