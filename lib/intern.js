const Employee = require('./employee.js');

class Intern extends Employee{
    constructor(name, id, email, role, school){
        super(name, id, email, role);
        this.role = 'Intern';
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;