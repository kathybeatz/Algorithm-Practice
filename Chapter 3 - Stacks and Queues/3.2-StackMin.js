//3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time.

/*
 *
 * Time: push O(1), pop O(1), peek O(1), min O(1)
 * Additonal space: push O(N), pop O(1), peek O(1), min O(1)
 * Additional space required in push to create wrapping object to hold min at
 * that point.
 */

 //Solution 1:
var MinStack = function() {
  this._stack = [];
};

MinStack.prototype.push = function() {
  var min = this.min();
  this._stack.push({
    value: value,
    min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value);
  });
};

MinStack.prototype.pop = function() {
  if (!this.isEmpty()) {
    var item = this._stack.pop();
    return item.value;
  }
};

MinStack.prototype.peek = function() {
  if (!this.isEmpty()) {
    var item = this._stack[this._stack.length - 1];
    return item.value;
  }
};

MinStack.prototype.min = function() {
  if (!this.isEmpty()) {
    var item = this._stack[this._stack.length - 1];
    return item.min;
  }
};

MinStack.prototype.isEmpty = function() {
  return this._stack.length === 0;
};

