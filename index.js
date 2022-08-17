// link to page creation
const PageTemplate = require('./src/PageTemplate');

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
            const { managername, managerID, manageremail, managerofcnum } = managerInput;
            const manager = new Manager(managername, managerID, manageremail, managerofcnum);
            Emp.push(manager)
            addEmployee();

            //console.log(manager);
        });
}

const addEmployee = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern', 'No more team members are needed']
        }]).then(employeeData => {
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

const addEngineer = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What's the name of the Engineer?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's ID.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username.",
        }
    ]).then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        Emp.push(engineer);
        addEmployee();

    })

}

const addIntern = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What's the name of the Intern?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID.",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend ?",
        }
    ]).then(internData => {
        const intern = new Intern(internData.name, internData.email, internData.id, internData.school);
        Emp.push(intern);
        addEmployee();

    })

}


function htmlBuilder() {
    console.log("success");
    console.log(Emp);
   var html = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Team Profile</title>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <header>
           <nav class="navbar" style="background-color: #D81233;">
               <div class="container-fluid">
                 <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
               </div>
             </nav>
       </header>
   
       <main>
         <div class="container">
           <div class="row justify-content-center" id="team-cards">
           ${Emp.map(emp => EmpCard(emp))}
           </div>
           </div>
   
   
       </main>
   
       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
           integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
           crossorigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
           integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
           crossorigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
           integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
           crossorigin="anonymous"></script>
   
   
   </body>
   
   </html>

      `
    
       

        fs.writeFile('./dist/index.html', html, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
              
            }
          });
          
    
}


addManager()

function EmpCard(emp) {
    switch (emp.getRole()) {
        case "Manager":
            return `
            <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>Manager</h3>
          <h4></h4><i class="material-icons"></i>
      </div>

      <div class="card-body">
          <p class="id">ID: ${emp.id} </p>
          <p class="email">Email: <a href="mailto:${emp.email}">${emp.email}</a></p>
          <p class="office">Office Number:${emp.officeNumber} </p>
      </div>

  </div>
</div>  `;

        case "Engineer":
            return `

        <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>Engineer</h3>
          <h4></h4><i class="material-icons"></i>
      </div>

      <div class="card-body">
          <p class="id">ID:${emp.id} </p>
          <p class="email">Email: <a href="mailto:${emp.email}">${emp.email}</a></p>
          <p class="github">Github:<a href="${emp.github}">${emp.github}</a></p>
      </div>

  </div>
</div>   `;

        case "Intern":
            return `
        <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>Intern</h3>
          <h4></h4><i class="material-icons"></i>
      </div>

      <div class="card-body">
          <p class="id">ID: ${emp.id} </p>
          <p class="email">Email:<a href="mailto:${emp.email}">${emp.email}</a></p>
          <p class="school">School:${emp.school} </p>
      </div>
</div>
</div> `;

        default:
            break;
    }
}




