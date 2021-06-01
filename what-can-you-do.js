// Import prompt-sync
const prompt = require('prompt-sync')();

//user input

const age = prompt("what is your age?")

//output section

if (age < 16) {
    console.log("you cant't drive")
}

else if (age >= 16 && age <= 17) {
    console.log("you can drive but not vote")
}

else if (age >= 18 && age <= 24) {
    console.log("you can vote but you can't rent a car")
}

else {
    console.log("you can pretty much do anything")
}