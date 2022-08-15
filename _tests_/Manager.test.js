const Manager = require('../lib/Manager');
  
test('creates an Manager object', () => {
    const manager = new Manager('Alka',23, 'alkasah485@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Alka',23,'alkasah485@gmil.com');

    expect(manager.getRole()).toEqual("Manager");
}); 