//////////////////////////
//    Creating a Set    //
//////////////////////////
function Set() {
  this._storage = {};
  this._count = 0;
}

// O(1)
Set.prototype.count = function() {
  return this._count;
};

// O(1)
Set.prototype.has = function(value) {
  return !!this._storage[value];
};

// O(1)
Set.prototype.add = function(value) {
  if (this.has(value)) {
    return 'Set already has value';
  }
  this._storage[value] = true;
  this._count++;
  return this;
};

// O(1)
Set.prototype.delete = function(value) {
  if (this._storage[value]) {
    delete this._storage[value];
    this._count--;
    return true;
  }
  return false;
};

// O(n)
Set.prototype.forEach = function(callback) {
  var values = this._storage;
  for (var key in values) {
    callback(key);
  }
};



///////////////////////////
//    Creating a Graph   //
///////////////////////////
function Graph () {
  this._nodes = {};
}

Graph.prototype.addNode = function(value) {
  if (value === undefined) {
    return;
  } 
  this._nodes[value] = this._nodes[value] || [];
};


Graph.prototype.removeNode = function(value) {  
  //delete edges in neighbors list of node that is being removed
  for ( var neighbor in this._nodes ) {
    var neighborsNeighbors = this._nodes[neighbor];
    var index = neighborsNeighbors.indexOf(value);
    neighborsNeighbors.splice(index, 1);
  }
  delete this._nodes[value];
};

Graph.prototype.contains = function(value) {
  return this._nodes[value] !== undefined;
};

Graph.prototype.addEdge = function(value1, value2) {
  if (!this._nodes[value1] || !this._nodes[value2]) {
    return 'Invalid node value';
  } 
  this._nodes[value1].push(value2);
  // this._nodes[value2].push(value1);
};

Graph.prototype.removeEdge = function(value1, value2) {
  if (!this._nodes[value1] || !this._nodes[value2]) {
    return 'Invalid node value';
  }

  var value1Neighbors = this._nodes[value1];
  value1Neighbors.splice(value1Neighbors.indexOf(value2), 1);
  // var value2Neighbors = this._nodes[value2];
  // value2Neighbors.splice(value2Neighbors.indexOf(value1), 1);
};

Graph.prototype.hasEdge = function(value1, value2) {
  return this._nodes[value1].indexOf(value2) > -1;
};

Graph.prototype.forEach = function(fn) {
  for (var node in this._nodes) {
    fn(node, this._nodes[node], this._nodes);
  }
};

Graph.prototype.traverseDepthFirst = function(value, fn, visited, distance) {
  if (!this._nodes[value] || typeof fn !== 'function') {
    return 'Invalid value or function';
  }
  visited = visited || {};
  distance = distance || 0;
  fn(value, distance);
  visited[value] = true;

  this._nodes[value].forEach(function(neighbor) {
    if (visited[neighbor]) {
      return;
    }
    this.traverseDepthFirst(neighbor, fn, visited, distance+1);
  }, this);
};

Graph.prototype.traverseBreadthFirst = function(value, fn) {
  if (!this._nodes[value] || typeof fn !== 'function') {
    return 'Invalid value or function';
  } 
  var visited = {};
  var queue = [value];
  visited[value] = 0;

  while (queue.length) {
    var node = queue.shift();
    fn(node, visited[node]);
    var neighbors = this._nodes[node].filter(function(neighbor) {
      if (visited[neighbor] === undefined) {
        visited[neighbor] = visited[node]+1;
        return true;
      }
    });
    queue = queue.concat(neighbors);
  }
};

var graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
console.log(graph._nodes, 'should have 5');
graph.removeNode(5);
console.log(graph._nodes, 'should NOT have 5');
console.log(graph.contains(4), 'should be true');
console.log(graph.contains(7), 'should be false');
graph.addEdge(1,2);
graph.addEdge(1,4);
graph.addEdge(2,3);
graph.addEdge(2,4);
console.log(graph._nodes);
var traverseBF = [];
graph.traverseBreadthFirst(1, function(val, dist) { traverseBF.push([val, dist]) });
console.log(traverseBF, 'should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ] ]');
var traverseDF = [];
graph.traverseDepthFirst(1, function(val, dist) { traverseDF.push([val, dist]) });
console.log(traverseDF, 'should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 2 ] ]');

//4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

/*
 *
 * Time: 
 * Additonal space: 
 *
 */


//Solution 1: Breadth First Search
// BFS useful for nodes that have many neighbors and paths between pairs and are not exceedingly deep. Will visit neighbors from the source node radiating outwards.
var isConnectedBFS = function(graph, source, target) {
  //create a set to hold each node's neighbors
  var discovered = new Set();
  //place the starting node in the queue
  queue = [source];

  //loop as long as there are items in the queue
  while (queue.length > 0) {
    //set the first item in the queue to the current node 
    var node = queue.shift();
    //loop through that node's neighbors
    for (var neighbor of graph._nodes[node]) {
      //if the set doesnt contain the neighbor node
      if (!discovered.has(neighbor)) {
        //if the neighbor node is equal to the target
        if (neighbor === target) {
          //found a route
          return true;
        }
        //otherwise add the neighbor node to the set
        discovered.add(neighbor);
        //push the neighbor node into the queue
        queue.push(neighbor);
      }
    }
  }
  //didn't find a route
  return false;
};

console.log('isConnectedBFS', isConnectedBFS(graph, 1, 3)); //true
console.log('isConnectedBFS', isConnectedBFS(graph, 3, 4)); //false



//Solution 2: Depth First Search
// DFS useful where graph has really long paths and want to travel as far as we can through the graph as quickly as possible. DFS can be recursive or use a stack and iteration

var isConnectedDFS = function(graph, source, target) {
  //call helper function
  return dfs(graph, new Set(), source, target);
};

var dfs = function(graph, discovered, source, target) {
  //if current node is equal to the target
  if (source === target) {
    //return true
    return true;
  }

  //add current node to set (list of marked nodes)
  discovered.add(source);
  //loop through 
  for (var neighbor of graph._nodes[source]) {
    if (!discovered.has(neighbor)) {
      if ( dfs(graph, discovered, neighbor, target) ) {
        return true;
      }
    }
  }
  return false;
};

console.log('isConnectedDFS', isConnectedDFS(graph, 1, 3)); //true
console.log('isConnectedDFS', isConnectedDFS(graph, 3, 4)); //false

