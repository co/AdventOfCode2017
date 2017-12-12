const solution = require("../source/11");
const f = require("fs");
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 11 + ".txt", 'utf8').trim()

console.log("Test case 1.1: " + (solution.getHexGridDistance("ne,ne,ne") == 3));
console.log("Test case 1.2: " + (solution.getHexGridDistance("ne,ne,sw,sw") == 0));
console.log("Test case 1.3: " + (solution.getHexGridDistance("ne,ne,s,s") == 2));
console.log("Test case 1.4: " + (solution.getHexGridDistance("se,sw,se,sw,sw") == 3));
console.log("Result: " + solution.getHexGridDistance(input))

console.log("Result: " + solution.getHexGridGreatestDistance(input))