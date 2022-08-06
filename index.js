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
            name : 'name',
            message : 'Who is the manager of this team?,'

        }
    ])
    .then
        //console.log('sucess!');
    
}

addManager();

