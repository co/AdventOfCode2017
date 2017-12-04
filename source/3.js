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
        var innerDiameter = diameter -2
        var indexInLayer = x - innerDiameter * innerDiameter - 1
        var sizeOfLayer = this.getSizeOfLayer(diameter)
        var indexOnSide = indexInLayer % (diameter - 1)
        return Math.abs(indexOnSide - (radius - 1))
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

    getFirstNumberGreaterThan: function(x){
        memory = [1]
        diameter = 1
        index = 1
        while(memory[memory.length - 1] < x)
        {
            lastMemory = memory[memory.length - 1]
            memory.push(lastMemory)
        }
    }
}