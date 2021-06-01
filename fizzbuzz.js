//import prompt-sync
const prompt = require("prompt-sync")();

//input prompt
const num = prompt("Welcome to fizzbuzz! please enter a number. ");
const fizzNum = Number(num);
//output set

if (fizzNum % 3 === 0 && fizzNum % 5 === 0) {
    console.log("Fizzbuzz!")
}
else if (fizzNum % 3 === 0) {
    console.log("Fizz!")
}
else if (fizzNum % 5 === 0) {
    console.log("buzz!")
}

else {
    console.log("nothing special")
}