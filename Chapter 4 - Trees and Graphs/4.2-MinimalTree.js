var util = require('util');
//4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.


//function takes in an array
  //find the midpoint of that array
  //make the root node the midpoint value

  //loop as long as start is greater than end
    //find the middle of the first half (start -> mid-1)
      //insert to the left of the root node
      //recurse
  //loop as long as end is greater than mid
    //find the middle of the second half (mid+1 -> end);
      //insert to the right of the root node
      //recurse


//Solution 1: Since the list is already sorted, a divide and conquer approach is best. Get the value at the middle index and set it as the root. The array is now broken into left and right halves. Keep dividing the left and right halves, set the middle index as either the left or right nodes and continue to divide and conquer

function BinarySearchTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left) {
      this.left.insert(value);
    }
    else {
      this.left = new BinarySearchTree(value);
    }
  }
  else {
    if (this.right) {
      this.right.insert(value);
    }
    else {
      this.right = new BinarySearchTree(value);
    }
  }
  return this;
};

function makeBalancedTree(array, start, end) {
  if (end < start) {
    return null;
  }

  var mid = (start+end)/2;
  var tree = new BinarySearchTree(array[mid]);
  tree.left = (makeBalancedTree(array, start, mid - 1));
  tree.right = (makeBalancedTree(array, mid + 1, end));

  return tree;
};

var array = [1,2,3,4,5,6,7];
console.log(util.inspect(makeBalancedTree(array, 0, 6), false, null));
// BinarySearchTree {
//   value: 4,
//   left: 
//    BinarySearchTree {
//      value: 2,
//      left: BinarySearchTree { value: 1, left: null, right: null },
//      right: BinarySearchTree { value: 3, left: null, right: null } },
//   right: 
//    BinarySearchTree {
//      value: 6,
//      left: BinarySearchTree { value: 5, left: null, right: null },
//      right: BinarySearchTree { value: 7, left: null, right: null } } }