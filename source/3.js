const right = [0, 1]
const up = [-1, 0]
const left = [0, -1]
const down = [1, 0]
const directions = [right, up, left, down]

const upRight = [-1, 1]
const upLeft = [-1, -1]
const downLeft = [1, -1]
const downRight = [1, 1]
const diagonals = [upLeft, upRight, downLeft, downRight]

module.exports = {
    memoryDistance: function(x)
    {
        if(x == 1)
        {
            return 0
        }
        var result = this.getRadius(x) + this.getSideCost(x)
        return result
    },

    getSideCost: function(x){

        var diameter = this.getDiameter(x)
        var radius = this.getRadius(x)
        var indexInLayer = this.getIndexInLayer(x)
        var sizeOfLayer = this.getSizeOfLayer(diameter)
        var indexOnSide = indexInLayer % (diameter - 1)
        return Math.abs(indexOnSide - (radius - 1))
    },

    getIndexInLayer: function(x){
        var diameter = this.getDiameter(x)
        var innerDiameter = diameter -2
        return x - innerDiameter * innerDiameter - 1
    },

    getDiameter: function(x) {
        d = 1
        while(d * d < x)
        {
            d += 2
        }

        return d
    },

    getSizeOfLayer: function(diameter) {
        var innerDiameter = diameter -2
        return diameter * diameter - innerDiameter * innerDiameter
    },

    getRadius: function(x) {
        return Math.floor(this.getDiameter(x) / 2)
    },

    getFirstNumberGreaterThan: function(stop){
        var memory = new this.Memory(11, 11)
        var diameter = 3
        var radius = 1
        var result = 0
        while(result < stop)
        {
            result = memory.step()
            memory.turnLeft()
            for(var i = 0; i < diameter - 2; i++) {
                result = memory.step();
                if(result > stop)
                {
                    return result
                }
            }

            for (var s = 0; s < 3; s++) {
                memory.turnLeft()
                for (var i = 0; i < diameter - 1; i++) {
                    result = memory.step();
                    if (result > stop) {
                        return result
                    }
                }
            }
            diameter += 2
            radius++
        }
        return result
    },

    Memory: class {
        constructor(width, height) {
            this.memory = [];
            for (var i = 0; i < height; i++) {
                this.memory[i] = new Array(width);
                for (var j = 0; j < width; j++) {
                    this.memory[i][j] = 0;
                }
            }

            this.x = Math.floor(width / 2)
            this.y = Math.floor(height / 2)
            this.memory[this.y][this.x] = 1
            this.directionIndex = 0
        }
        
        turnRight() {
            this.directionIndex = (this.directionIndex - 1 + directions.length) % directions.length
        }
        
        turnLeft() {
            this.directionIndex = (this.directionIndex + 1) % directions.length
        }

        step() {
            this.y += directions[this.directionIndex][0]
            this.x += directions[this.directionIndex][1]

            var allDirections = directions.concat(diagonals)
            var memoryNeighbors = allDirections.map(d => this.memory[this.y + d[0]][this.x + d[1]])
            var result = memoryNeighbors.reduce((a, b) => a + b, 0)
            this.memory[this.y][this.x] = result
            return this.memory[this.y][this.x]
        }
    }
}