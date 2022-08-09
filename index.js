// link to page creation
const PageTemplate = require('./src/Pagetemplate');

//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

//Employee array

const Emp = [];

//Manager Prompt

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'Who is the manager of this team?',

        },
        {

            type: 'input',
            name: 'managerID',
            message: 'Please enter the manager ID.',
        },

        {

            type: 'input',
            name: 'manageremail',
            message: 'Please enter the manager email.',
        },

        {

            type: 'input',
            name: 'managerofcnum',
            message: 'Please enter the manager office number.',
        },

    ])
    .then(managerInput => {
        const{managername,managerID,manageremail,managerofcnum} = managerInput;
        const manager = new Manager(managername,managerID,manageremail,managerofcnum);
        Emp.push(manager)
        //console.log(manager);
    })
};

const addEmployee =() =>{
    console.log(`
    ===============
    Adding employees to the team
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name : 'role',
            message: "Please choose your employee's role",
            choices : ['Engineer','Intern']

        },
        {
            type: 'input',
            name : 'name',
            message : "What's the name of the employee?",
        },
        {
           type : 'input',
           name: 'email',
           message : "Please enter the employee's email.", 
        },
        {
            type : 'input',
            name : 'github',
            message : "Please enter the employee's github username.",
        },
        {
            type: 'input',
            name : 'school',
            message: " Please enter the intern's school",
        },
        {
          type:'confirm',
          name : 'confirmAddEmployee',
          message : 'Would you like to add more team members?',
          default : false  
        }
    ])
    .then(employeeData => {
        //data for employee types

        let{name,id,email,role,github,school,confirmAddEmployee} = employeeData;
        let employee;

        if(role === "Engineer"){
            employee = new Engineer(name,id,email,github);
            console.log(employee);
        } 
        else if(role ==="Intern"){
            employee = new Intern(name,id,email,github);
            console.log(employee);
        }
        Emp.push(employee);

        if (confirmAddEmployee) 
        {
              return addEmployee(Emp);    
        } else {
            return Emp;
            
        }
    })
    
};
//addManager();
addEmployee();

