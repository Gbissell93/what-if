//Import prompt-sync
const prompt = require("prompt-sync")();

//group size input
const size = prompt("please enter group size");

//convert size to number type
const sizeNumber = Number(size);

//calculate group divisions 

const groupsOf3 = sizeNumber/3;
const groupsOf2 = 0;

if (groupsOf3 % 3 < 2) {
    console.log(groupsOf3 - 1,
        groupsOf2 + 1)
}

//log out results 
