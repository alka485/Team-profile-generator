//importing Employee constructor
const Employee = require('./Employee');

//manager constructor extends employee constructor

class Manager extends Employee{
    constructor(name,id,email,officeNumber,githubusername){
        //calling employee constructor
        super(name,id,email,githubusername);
        this.officeNumber = officeNumber;
    }
}