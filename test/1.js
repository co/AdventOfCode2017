const solution = require("../source/1");
const f = require("fs");
//import * as one from "../source/1";
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 1 + ".txt", 'utf8').trim()

console.log("Test case 1.1: " + (solution.calculateChecksum("1122") == 3));
console.log("Test case 1.2: " + (solution.calculateChecksum("1111") == 4));
console.log("Test case 1.3: " + (solution.calculateChecksum("1234") == 0));
console.log("Test case 1.4: " + (solution.calculateChecksum("91212129") == 9));

console.log("Result: " + solution.calculateChecksum(input))

console.log("Test case 2.1: " + (solution.calculateChecksum2("1212") == 6));
console.log("Test case 2.2: " + (solution.calculateChecksum2("1221") == 0));
console.log("Test case 2.3: " + (solution.calculateChecksum2("123123") == 12));
console.log("Test case 2.4: " + (solution.calculateChecksum2("12131415") == 4));
console.log("Result: " + solution.calculateChecksum2(input))