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
        addEmployee();
      
        //console.log(manager);
    });
}

const addEmployee =() =>{
   
    return inquirer.prompt([
        {
            type: 'list',
            name : 'role',
            message: "Please choose your employee's role",
            choices : ['Engineer','Intern','No more team members are needed']
     } ]).then(employeeData => {
        switch (employeeData.role) {
            case "Engineer":
                addEngineer();
                
                break;
            case "Intern":
                addIntern(); 
                break;   
        
            default:
                htmlBuilder();
                break;
        }
     })
    }

     const addEngineer =() =>{
        return inquirer.prompt([
            
        {
            type: 'input',
            name : 'name',
            message : "What's the name of the Engineer?",
        },
        {
           type : 'input',
           name: 'email',
           message : "Please enter the engineer's email.", 
        },
        {
            type : 'input',
            name: 'id',
            message : "Please enter the engineer's ID.", 
         },
        {
            type : 'input',
            name : 'github',
            message : "Please enter the engineer's github username.",
        }
        ]).then(engineerData =>{
            const engineer = new Engineer(engineerData.name,engineerData.id,engineerData.email,engineerData.github);
            Emp.push(engineer);
            addEmployee();

        })

     }

     const addIntern =() =>{
        return inquirer.prompt([
            
        {
            type: 'input',
            name : 'name',
            message : "What's the name of the Intern?",
        },
        {
           type : 'input',
           name: 'email',
           message : "Please enter the intern's email address.", 
        },
        {
            type : 'input',
            name: 'id',
            message : "Please enter the intern's ID.", 
         },
        {
            type : 'input',
            name : 'school',
            message : "What school does the intern attend ?",
        }
        ]).then(internData =>{
            const intern = new Intern(internData.name,internData.email,internData.id,internData.school);
            Emp.push(intern);
            addEmployee();

        })

     }
       
     
     function htmlBuilder () {
        console.log("success");

           const writeFile=data =>{
            fs.writeFile('./dist/index.html',data,err) 
                    if(err){
                        console.log(err);
                        return;
                    } else {
                        console.log("TeamCreated")
                    }
                }
            }   
            
            
  addManager()
  .then(Emp =>{
    return PageTemplate(Emp);
  })
   .then(pageHTML=>{
    return PageTemplate(Emp);
   }) 
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err =>{
    console.log(err);
});