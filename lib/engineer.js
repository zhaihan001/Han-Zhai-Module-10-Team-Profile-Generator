const Employee = require('./employee.js');

class Engineer extends Employee{
    constructor(name, id, email, role, github){
        super(name, id, email, role);
        this.role = 'Engineer';
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;