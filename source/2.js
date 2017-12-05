module.exports = {
    calculateLineChecksum: function (line) {
        var numbersSorted = line.split("\t").map(n => parseInt(n.trim())).sort((a, b) =>a - b)
        return numbersSorted[numbersSorted.length - 1] - numbersSorted[0]
    },

    calculateSpreadsheetChecksum: function (input) {
        var lines = input.split("\n").map(l => l.trim())
        return lines.map(l => this.calculateLineChecksum(l)).reduce((a, b) => a + b, 0)
    },

    calculateLineDivisionChecksum: function (line) {
        var numbersSorted = line.split("\t").map(n => parseInt(n.trim())).sort((a, b) =>b - a)
        for(n of numbersSorted) {
            var dividendsFound = numbersSorted.filter(x => x != n && x % n == 0)
            if(dividendsFound.length > 0)
            {
                return dividendsFound[0] / n
            }
        }
        throw "No divisor found in line: " + line
    },

    calculateSpreadsheetDivisionChecksum: function (input) {
        var lines = input.split("\n").map(l => l.trim())
        return lines.map(l => this.calculateLineDivisionChecksum(l)).reduce((a, b) => a + b, 0)
    },
}