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
    getRoot: function(input)
    {
        var tree = buildTree(input)
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

    Node: class {
        constructor(name, weight) {
            this.name = name
            this.weight = weight
            this.parents = []
        }

        addParent(parent) {
            this.parents.push(parent)
        }
    }
}