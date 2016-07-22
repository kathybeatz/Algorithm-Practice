//4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

//Solution 1:

//input an array of sorted values
function makeBalancedTree = function(values) {
  //create a new tree
  var tree = new Tree();
  if (values && values.length) {
    add(tree, values, 0, values.length - 1);
  }
};

function add(tree, values, start, end) {
  if(start === end) {
    tree.add(values[start]);
  }
  else if (start < end) {
    var mid = start + Math.floor((end - start) / 2);
    tree.add(values[mid]);
    add(tree, values, start, mid - 1);
    add(tree, values, mid + 1, end);
  }
};