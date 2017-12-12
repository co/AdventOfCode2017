module.exports = {
    inputToPipeDictionary: function (input) {
        var lines = input.split("\n")
        var pipeDictionary = new Array(lines.length)
        for(var i = 0; i < lines.length; i++){
            connectionArray = lines[i].split("<->")[1].split(", ").map(s => parseInt(s.trim()))
            pipeDictionary[i] = connectionArray
        }
        return pipeDictionary
    },

    sizeOfGraphConnectedWithFirst: function (input) {
        return this.getNodesInCluster(this.inputToPipeDictionary(input), 0).size
    },

    getNumberOfGroups: function(input) {
        return this.countNumberOfGroups(this.inputToPipeDictionary(input))
    },

    countNumberOfGroups: function(pipeDictionary) {
        var visitedNodes = new Set()
        var groupsCount = 0
        for(var i = 0; i < pipeDictionary.length; i++){
            if(!visitedNodes.has(i)){
                groupsCount++
                var nodesOfNewGroup = this.getNodesInCluster(pipeDictionary, i)
                visitedNodes = new Set([...visitedNodes, ...nodesOfNewGroup])
            }
        }
        return groupsCount
    },

    getNodesInCluster: function(pipeDictionary, startNode){
        var visitedNodes = new Set()
        visitedNodes.add(startNode)
        var nodesToVisit = pipeDictionary[startNode]
        while (nodesToVisit.length > 0) {
            var currentNode = nodesToVisit.pop()
            visitedNodes.add(currentNode)
            nodesToVisit = nodesToVisit.concat(pipeDictionary[currentNode].filter(n => !visitedNodes.has(n) && !nodesToVisit.includes(n)))
        }
        return visitedNodes
    }
}