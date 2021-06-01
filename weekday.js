//Import prompt-sync
const prompt = require("prompt-sync")();

//input 
const day = prompt("Enter a number between 1-7")

//logic
if (day == 1) {
    console.log("monday")
}
else if (day == 2) {
    console.log("tuesday (Twos-day)")
}
else if (day == 3) {
    console.log("wednesday")
}
else if (day == 4) {
    console.log("thursday")
}
else if (day == 5) {
    console.log("friday (fri-yay)")
}
else if (day == 6) {
    console.log("saturday")
}
else if (day == 7) {
    console.log("sunday")
}
else {
    console.log("error")
}