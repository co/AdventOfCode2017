module.exports = {
    stringToIntArray: function(str){
        return str.split("\t").map(l => parseInt(l.trim()))
    },

    memoryToString: function(array){
        return array.join("\t")
    },

    balanceMemory: function(input){
        var memory = this.stringToIntArray(input)
        previousStates = new Set()
        var numberOfSteps = 0
        while(!previousStates.has(this.memoryToString(memory))){
            previousStates.add(this.memoryToString(memory))
            var largestNumber = Math.max(memory.reduce((a, b) => Math.max(a, b)))
            var largestIndex = memory.indexOf(largestNumber)
            memory[largestIndex] = 0
            for(var offset = 0; offset < largestNumber; offset++) {
                memory[((largestIndex + offset + 1) % memory.length)]++
            }

            numberOfSteps++
        }

        return numberOfSteps
    },

    balanceMemory2: function (input) {
        var memory = this.stringToIntArray(input)
        previousStates = new Set()
        while (true) {
            memoryString = this.memoryToString(memory)
            if (previousStates.has(memoryString)) {
                return this.balanceMemory(memoryString)
            }

            previousStates.add(memoryString)
            var largestNumber = Math.max(memory.reduce((a, b) => Math.max(a, b)))
            var largestIndex = memory.indexOf(largestNumber)
            memory[largestIndex] = 0
            for (var offset = 0; offset < largestNumber; offset++) {
                memory[((largestIndex + offset + 1) % memory.length)]++
            }
        }
    },
}