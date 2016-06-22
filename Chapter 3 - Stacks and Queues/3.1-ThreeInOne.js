//3.1 Three in One: Describe how you could use a single array to implement three stacks.

/*
 *
 * Time: push O(1), pop O(1), peek O(1)
 * Additonal space: push (1), pop O(1), peek O(1) 
 *
 */

//Solution 1: Pseudoclassical TripleStack implementation. TripleStack class holds 3 stacks in one array. The first items are placed at indexes 0, 1, and 2 (e.g. Push 'a' into stack 1, 'a' will be at index 0 etc.). Following items are placed every 3 places from those. 

var TripleStack = function() {
  this._array = [];
  this._lengths = [0, 0, 0];
  };

TripleStack.prototype.getLength = function(stack) {
  return this._lengths[stack - 1];
};

TripleStack.prototype.push = function(stack, value) {
  var index = (this.getLength(stack) * 3) + stack - 1;
  console.log('pushed index', index);
  this._array[index] = value;
  console.log('value', this._array[index]);
  this._lengths[stack - 1]++;
};

TripleStack.prototype.pop = function(stack) {
  var length = this.getLength(stack);
  var value;
  if (length > 0) {
    var index = (length - 1) * 3 + stack - 1;
    value = this._array[index];
    delete this._array[index] 
    this._lengths[stack - 1]--;
  }
  return value;
};

//return the top of the stack
TripleStack.prototype.peek = function(stack) {
  var length = this.getLength(stack);
  var value;
  if (length > 0) {
    var index = (length - 1) * 3 + stack - 1;
    value = this._array[index];
  }
  return value;
};

TripleStack.prototype.isEmpty = function(stack) {
  return this.getLength(stack) === 0;
};

var threeStacks = new TripleStack();

threeStacks.push(1, 4);
threeStacks.push(1, 5);
threeStacks.push(1, 6);
threeStacks.push(2, 7);
threeStacks.push(2, 8);
threeStacks.push(2, 9);
threeStacks.push(3, 1);
threeStacks.push(3, 2);
threeStacks.push(3, 3);
console.log(threeStacks);
console.log('peek stack 1', threeStacks.peek(1)); //should be 6
console.log('peek stack 2', threeStacks.peek(2)); //should be 9
console.log('peek stack 3', threeStacks.peek(3)); //should be 3
threeStacks.pop(1);
console.log(threeStacks);

