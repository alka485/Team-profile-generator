const PageTemplate = function (manager) {
    return`
    <div class = "card employee-card">
    <div class = "card-header bg-primary text-white">
    <h2 class = "card-title">${manager.getName()}</h2>
    <h3 class = "card -title"><i class ="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    `
    
}