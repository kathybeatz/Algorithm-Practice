var util = require('util');

function BinarySearchTree(value) {
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

BinarySearchTree.prototype.contains = function(value) {
  if (this.value == value) {
    return true;
  } 
  if (value < this.value) {
    return !!this.left && this.left.contains(value);
  }
  if (value > this.value) {
    return !!this.right && this.right.contains(value);
  }
  return false;
};

var bsTree = new BinarySearchTree(10);
bsTree.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
console.log(util.inspect(bsTree, false, null));