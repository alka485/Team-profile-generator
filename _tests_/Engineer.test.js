const Engineer = require('../lib/Engineer');
test('creates an engineer object',() => {
    const engineer = new Engineer('Alka',23,'alkasah485@gmail.com','alka485');

    expect(engineer.github).toEqual(expect.any(String));
    
});
