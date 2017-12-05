const solution = require("../source/2");
const f = require("fs");
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 2 + ".txt", 'utf8').trim()

console.log("Test case 1.1: " + (solution.calculateLineChecksum("5\t1\t9\t5") == 8));
console.log("Test case 1.2: " + (solution.calculateLineChecksum("7\t5\t3") == 4));
console.log("Test case 1.3: " + (solution.calculateLineChecksum("2\t4\t6\t8") == 6));

console.log("Result: " + solution.calculateSpreadsheetChecksum(input))

console.log("Test case 2.1: " + (solution.calculateLineDivisionChecksum("5\t9\t2\t8") == 4));
console.log("Test case 2.2: " + (solution.calculateLineDivisionChecksum("9\t4\t7\t3") == 3));
console.log("Test case 2.3: " + (solution.calculateLineDivisionChecksum("3\t8\t6\t5") == 2));

console.log("Result: " + solution.calculateSpreadsheetDivisionChecksum(input))