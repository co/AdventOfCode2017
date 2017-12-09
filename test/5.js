const solution = require("../source/5");
const f = require("fs");
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 5 + ".txt", 'utf8').trim()

console.log("Test case 1.1: " + (solution.escapeMaze("0\n3\n0\n1\n-3") == 5));
console.log("Result: " + solution.escapeMaze(input))

console.log("Test case 2.1: " + (solution.escapeMaze2("0\n3\n0\n1\n-3") == 10));
console.log("Result: " + solution.escapeMaze2(input))