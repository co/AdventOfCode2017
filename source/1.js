module.exports = {
    calculateChecksum: function (input) {
        var previousDigit = input[input.length-1] // The list is circular, the previous digit of the first digit is the last digit.
        var checksum = 0
        for(var currentDigit of input) {
            if (previousDigit == currentDigit)
            {
                checksum += parseInt(currentDigit)
            }
            previousDigit = currentDigit
        }
        return checksum
    },

    calculateChecksum2: function (input) {
        var previousDigit = input[input.length-1] // The list is circular, the previous digit of the first digit is the last digit.
        var checksum = 0
        for(i = 0; i < input.length; i++) {
            var currentDigit = input[i]
            var othersideDigit = input[(i + input.length / 2) % input.length]
            if (currentDigit == othersideDigit)
            {
                checksum += parseInt(currentDigit)
            }
        }
        return checksum
    }
}
