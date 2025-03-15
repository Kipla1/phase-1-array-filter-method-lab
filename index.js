// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching= function(drivers, name){
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function(driver){
        return driver.charAt(0).toLowerCase() === name.charAt(0).toLowerCase();

    })
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    })
}