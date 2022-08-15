const Intern = require('../lib/Intern');

test('creates an intern object',() => {
    const intern = new Intern('Alka',23,'alkasah485@gmail.com','alka485','UW');

    expect(intern.school).toEqual(expect.any(String));
    
});

test('gets intern school', () =>
 {
    const intern = new Intern('Alka',23,'alkasah485@gmail.com','alka485','UW');

    expect(intern.getSchool()).toEqual(expect.StringContaining(intern.school.toString()));
});

test('gets role of employee', () => {

    const intern = new Intern('Alka',23,'alkasah485@gmail.com','alka485','UW');
    
    expect(intern.getRole()).toEqual("Intern");
});


