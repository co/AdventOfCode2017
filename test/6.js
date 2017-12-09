const solution = require("../source/6");
const f = require("fs");
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 6 + ".txt", 'utf8').trim()

console.log("Test case 1.1: " + (solution.balanceMemory("0\t2\t7\t0") == 5));
console.log("Result: " + solution.balanceMemory(input))

console.log("Test case 2.1: " + (solution.balanceMemory2("2\t4\t1\t2") == 4));
console.log("Result: " + solution.balanceMemory2(input))