const solution = require("../source/3");

console.log("Test case 1.a: " + (solution.getRadius(1) == 0));
console.log("Test case 1.a: " + (solution.getRadius(2) == 1));
console.log("Test case 1.a: " + (solution.getRadius(9) == 1));
console.log("Test case 1.a: " + (solution.getRadius(10) == 2));
console.log("Test case 1.a: " + (solution.getRadius(25) == 2));
console.log("Test case 1.a: " + (solution.getRadius(26) == 3));

console.log("Test case 1.1: " + (solution.memoryDistance(1) == 0));
console.log("Test case 1.2: " + (solution.memoryDistance(12) == 3));
console.log("Test case 1.3: " + (solution.memoryDistance(23) == 2));
console.log("Test case 1.4: " + (solution.memoryDistance(1024) == 31));

console.log("Result: " + solution.memoryDistance(265149))

/*
console.log("Test case 2.1: " + (solution.isValidPassphrase2("abcde fghij") == true));
console.log("Test case 2.2: " + (solution.isValidPassphrase2("abcde xyz ecdab") == false));
console.log("Test case 2.3: " + (solution.isValidPassphrase2("a ab abc abd abf abj") == true));
console.log("Test case 2.3: " + (solution.isValidPassphrase2("iiii oiii ooii oooi oooo") == true));
console.log("Test case 2.3: " + (solution.isValidPassphrase2("oiii ioii iioi iiio") == false));
console.log("Result: " + solution.countValidPassphrases2(input))
*/