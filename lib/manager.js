const Employee = require('./employee.js');

class Manager extends Employee{
    constructor(name, id, email, role, officeNumber){
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    getofficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;