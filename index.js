// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//takes array of drives and a string as arguments, returns the matching list of drivers
// let findMatching = drivers.filter((name) => name)

function findMatching(driver, wantedName) {
    return driver.filter((match) => match === wantedName)
}

/* 
fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
 */

function fuzzyMatch(driver, nameLetters) {
    return driver.filter((letterMatch => letterMatch.length - 2))
}

fuzzyMatch(driver, "sa");
/* 
matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

drivers.name === "Bobby"


*/
function matchName(driver, wantedName) {
    return driver.filter((record) => record.name === wantedName);
}

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
// function filterItems(arr, query) {
//   return arr.filter(function(el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }

// console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']