//3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time.

/*
 *
 * Time: push O(1), pop O(1), peek O(1), min O(1)
 * Additonal space: push O(N), pop O(1), peek O(1), min O(1)
 * Additional space required in push to create wrapping object to hold min at
 * that point.
 */

 //Solution 1: Pseudoclassical implementation
var MinStack = function() {
  this._stack = [];
};


MinStack.prototype.push = function(value) {
  //grab the current min
  var min = this.min();
  //push an object into the stack containing
  this._stack.push({
    //the value 
    value: value,
    //check the min against the value pushed in, set the new min if value is less than the current min
    min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
  });
};

MinStack.prototype.pop = function() {
  if (!this.isEmpty()) {
    //use native Array pop to remove top item on stack
    var item = this._stack.pop();
    //return the value of the item on the top of the stack
    return item.value;
  }
};

MinStack.prototype.peek = function() {
  if (!this.isEmpty()) {
    //get the item on the top of the stack
    var item = this._stack[this._stack.length - 1];
    //return the value of that item
    return item.value;
  }
};

MinStack.prototype.min = function() {
  if (!this.isEmpty()) {
    //grab the top item in the stack
    var item = this._stack[this._stack.length - 1];
    //grab the current min
    return item.min;
  }
};

MinStack.prototype.isEmpty = function() {
  return this._stack.length === 0;
};

var minimumStack = new MinStack();
minimumStack.push(5);
minimumStack.push(3);
minimumStack.push(6);
minimumStack.push(2);
minimumStack.push(4);
console.log(minimumStack);
minimumStack.pop();
minimumStack.pop();
console.log('after pop', minimumStack);