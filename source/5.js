module.exports = {
    stringToIntArray: function(str){
        return str.split("\n").map(l => parseInt(l.trim()))
    },

    escapeMaze: function(input)
    {
        var maze = this.stringToIntArray(input)
        numberOfSteps = 0
        index = 0
        while(index >= 0 && index < maze.length){
            var jump = maze[index]
            maze[index]++
            index += jump
            numberOfSteps++
        }

        return numberOfSteps
    },

    escapeMaze2: function(input)
    {
        var maze = this.stringToIntArray(input)
        numberOfSteps = 0
        index = 0
        while(index >= 0 && index < maze.length){
            var jump = maze[index]
            if(jump >= 3) {
                maze[index]--
            }
            else {
                maze[index]++
            }

            index += jump
            numberOfSteps++
        }

        return numberOfSteps
    }
}