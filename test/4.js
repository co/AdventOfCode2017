const solution = require("../source/4");
const f = require("fs");
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 4 + ".txt", 'utf8').trim()

console.log("Test case 1.1: " + (solution.isValidPassphrase("aa bb cc dd ee") == true));
console.log("Test case 1.2: " + (solution.isValidPassphrase("aa bb cc dd aa") == false));
console.log("Test case 1.3: " + (solution.isValidPassphrase("aa bb cc dd aaa") == true));

console.log("Result: " + solution.countValidPassphrases(input))

console.log("Test case 2.1: " + (solution.isValidPassphrase2("abcde fghij") == true));
console.log("Test case 2.2: " + (solution.isValidPassphrase2("abcde xyz ecdab") == false));
console.log("Test case 2.3: " + (solution.isValidPassphrase2("a ab abc abd abf abj") == true));
console.log("Test case 2.3: " + (solution.isValidPassphrase2("iiii oiii ooii oooi oooo") == true));
console.log("Test case 2.3: " + (solution.isValidPassphrase2("oiii ioii iioi iiio") == false));
console.log("Result: " + solution.countValidPassphrases2(input))