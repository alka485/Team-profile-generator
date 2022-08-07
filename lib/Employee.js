//employee constructor

class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email
        
    }

    //returning name from input

    getName(){
        return this.name;
    }

    //returning Id from input
    getId() {
        return this.id;
    }

    //returning email from Input
    getEmail () {
        return this.email;
    }

    // //returning githubusername
    

    //returning emp type
    getRole(){
        return 'Employee'
    }
};

// to be exported
module.exports = Employee;