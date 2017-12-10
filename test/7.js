const solution = require("../source/6");
const f = require("fs");
var input = require('fs').readFileSync(__dirname + "\\..\\input\\" + 6 + ".txt", 'utf8').trim()

var testInput = "pbga (66)\
xhth (57)\
ebii (61)\
havc (66)\
ktlj (57)\
fwft (72) -> ktlj, cntj, xhth\
qoyq (66)\
padx (45) -> pbga, havc, qoyq\
tknk (41) -> ugml, padx, fwft\
jptl (61)\
ugml (68) -> gyxo, ebii, jptl\
gyxo (61)\
cntj (57)"

console.log("Test case 1.1: " + (solution.getRoot(testInput) == "tknk"));
console.log("Result: " + solution.getRoot(input))

console.log("Test case 2.1: " + (solution.balanceMemory2("2\t4\t1\t2") == 4));
console.log("Result: " + solution.balanceMemory2(input))