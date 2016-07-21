//Can view entire object when console.log
var util = require('util');


var Graph = function() {
  this._nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
    this._nodes[node] = this._nodes[node] || { edges: {} };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return !(this._nodes[node] === undefined);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    //   Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return this._nodes[fromNode].edges[toNode] ? true : false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
    this._nodes[fromNode].edges[toNode] = true; 


  //point backward
  // if (this._nodes[toNode].edges.indexOf(fromNode) === -1) { 
  //   this._nodes[toNode].edges.push(fromNode);
  // }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
  Graph.prototype.removeEdge = function(fromNode, toNode){
    console.log('remove edge', this._nodes[fromNode].edges[toNode]);
    delete this._nodes[fromNode].edges[toNode];
    // delete this._nodes[toNode].edges[fromNode];
  };

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var node in this._nodes) {
    cb(node);
  }
};



var test = new Graph();
test.addNode(1);
test.addNode(2);
test.addNode(3);
test.addNode(4);
test.addEdge(1, 2);
test.addEdge(2, 3);
test.addEdge(2, 4);
test.addEdge(3, 4);
console.log('original graph', util.inspect(test, false, null));
// { _nodes: 
//    { '1': { edges: { '2': true } },
//      '2': { edges: { '3': true, '4': true } },
//      '3': { edges: { '4': true } },
//      '4': { edges: {} } } }
console.log('has edge', test.hasEdge(3, 4)); //true
test.removeEdge(2, 4);
console.log('removed edge from 2 to 4 - graph', util.inspect(test, false, null));
// { _nodes: 
//    { '1': { edges: { '2': true } },
//      '2': { edges: { '3': true } },
//      '3': { edges: { '4': true } },
//      '4': { edges: {} } } }




