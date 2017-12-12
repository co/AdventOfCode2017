cubeDirections = {
    "n":  [0, 1, -1],
    "ne": [1, 0, -1],
    "nw": [-1, 1, 0],
    "s":  [0, -1, 1],
    "sw": [-1, 0, 1],
    "se": [1, -1, 0],
}

x = 0
y = 1
z = 2

module.exports = {
    getHexGridDistance: function (input) {
        var directions = input.split(",")
        var current = [0, 0, 0]

        for(direction of directions)
        {
            current[x] += cubeDirections[direction][x]
            current[y] += cubeDirections[direction][y]
            current[z] += cubeDirections[direction][z]
        }

        return Math.max(Math.abs(current[x]), Math.abs(current[y]), Math.abs(current[z]))
    },

    getHexGridGreatestDistance: function (input) {
        var directions = input.split(",")
        var current = [0, 0, 0]
        var greatestDistance = 0

        for(direction of directions)
        {
            current[x] += cubeDirections[direction][x]
            current[y] += cubeDirections[direction][y]
            current[z] += cubeDirections[direction][z]
            greatestDistance = Math.max(Math.abs(current[x]), Math.abs(current[y]), Math.abs(current[z]), greatestDistance)
        }

        return greatestDistance
    },
}