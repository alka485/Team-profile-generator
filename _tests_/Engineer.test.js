const Engineer = require('../lib/Engineer');
test('creates an engineer object',() => {
    const engineer = new Engineer('Alka',23,'alkasah485@gmail.com','alka485');

    expect(engineer.github).toEqual(expect.any(String));
    
});

test('gets engineer github value', () =>
 {
    const engineer = new Engineer('Alka',23,'alkasah485@gmail.com','alka485');

    expect(engineer.getGithub()).toEqual(expect.StringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Alka',23,'alkasah485@gmail.com');
    expect(employee.getRole()).toEqual("Engineer");
});


