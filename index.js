// link to page creation
const PageTemplate = require('./src/Pagetemplate');

//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//node modules
const inquirer = require('inquirer');
const fs = require('fs');

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
        const{managername,managerid,manageremail,managerofcnum} = managerInput;
        const manager = new Manager(managername,managerid,manageremail,managerofcnum);
        Emp.push(manager)
        console.log(manager);
    })
};
addManager();

