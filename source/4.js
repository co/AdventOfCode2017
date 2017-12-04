module.exports = {
    hasOnlyUniqueElements: function(list)
    {
        var elementSet = new Set(list)
        return elementSet.size == list.length
    },
    isValidPassphrase: function (line) {
        var words = line.split(" ")
        return this.hasOnlyUniqueElements(words)
    },

    countValidPassphrases: function (input) {
        var lines = input.split("\n").map(l => l.trim())
        return lines.filter(l => this.isValidPassphrase(l)).length
    },

    sortCharsInString: function(str) {
        return str.split('').sort().join('')
    },

    isValidPassphrase2: function (line) {
        var words = line.split(" ").map(this.sortCharsInString)
        return this.hasOnlyUniqueElements(words)
    },

    countValidPassphrases2: function (input) {
        var lines = input.split("\n").map(l => l.trim())
        return lines.filter(l => this.isValidPassphrase2(l)).length
    },
}