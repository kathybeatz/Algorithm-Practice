var util = require('util');

function Tree(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

// O(n)
Tree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) {
      return true;
    } 
  }

  return false;
};


var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = tree.addChild(3);
var branch3 = tree.addChild(4);
branch1.addChild(5);
branch1.addChild(6);
branch3.addChild(7).addChild(8);
console.log(util.inspect(tree, false, null));
// Tree {
//   value: 1,
//   children: 
//    [ Tree {
//        value: 2,
//        children: 
//         [ Tree { value: 5, children: [] },
//           Tree { value: 6, children: [] } ] },
//      Tree { value: 3, children: [] },
//      Tree {
//        value: 4,
//        children: [ Tree { value: 7, children: [ Tree { value: 8, children: [] } ] } ] } ] }