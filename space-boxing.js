//import prompt-sync
const prompt = require("prompt-sync")();

//set earth weight
const earthWeight = prompt("Please enter your earth weight");
const earthWeightNum = Number(earthWeight);

//select planet
const planet = prompt("please select your planet");
const planetNum =Number(planet);

//output set
if (planetNum == 1) {
    console.log(earthWeightNum * 0.78)
}
if (planetNum == 2) {
    console.log(earthWeightNum * 0.39)
}
if (planetNum == 3) {
    console.log(earthWeightNum * 2.65)
}
if (planetNum == 4) {
    console.log(earthWeightNum * 1.17)
}
if (planetNum == 5) {
    console.log(earthWeightNum * 0.78)
}
if (planetNum == 6) {
    console.log(earthWeightNum * 1.05)
}
if (planetNum == 7) {
    console.log(earthWeightNum * 1.23)
}


else {
    console.log("please enter valid number")
}