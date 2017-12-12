const solution = require("../source/12");
const f = require("fs");
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 12 + ".txt", 'utf8').trim()

console.log("Test case 1.1: " + (solution.sizeOfGraphConnectedWithFirst("0 <-> 2\n1 <-> 1\n2 <-> 0, 3, 4\n3 <-> 2, 4\n4 <-> 2, 3, 6\n5 <-> 6\n6 <-> 4, 5") == 6));
console.log("Result: " + solution.sizeOfGraphConnectedWithFirst(input))

console.log("Test case 2.1: " + (solution.getNumberOfGroups("0 <-> 2\n1 <-> 1\n2 <-> 0, 3, 4\n3 <-> 2, 4\n4 <-> 2, 3, 6\n5 <-> 6\n6 <-> 4, 5") == 2));
console.log("Result: " + solution.getNumberOfGroups(input))