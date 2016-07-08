//4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

/*
 *
 * Time: 
 * Additonal space: 
 *
 */


//Solution 1: DFS
//Graph has really long paths and wants to travel as far as we can through that graph as quickly as possible. DFS can be recursive or use a stack and iteration

//function takes in a graph, start node and end node (order matters since directed graph)
var routeBetweenNodesDFS = function(graph, start, end) {
  return dfs(graph, new Set(), start, end);
};

//function takes in a graph, set of 
function dfs(graph, discovered, start, end) {
  //if the start node equals the end node
  if (start === end) {
    //route is found bc same node
    return true;
  }

  //Add the start node to the discovered set
  discovered.add(start);
  for (var neighbor of graph[start]) {
    if (!discovered.has(neighbor)) {
      if (dfs(graph, discovered, neighbor, end)) {
        return true;
      }
    }
  }


  return false;
};




//////////////////////////
//    Creating a Set    //
//////////////////////////
var Set = function(){
  this._storage = {};
  return this._storage;
};

Set.prototype.add = function() {
  this._storage[item] = true;
};

Set.prototype.contains = function(){
  return !!this._storage[item];
};

Set.prototype.remove = function() {
  delete this._storage[item];
};
