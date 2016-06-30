//3.3 Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).
//FOLLOW UP
//Implement a function popAt(index) which performs a pop operation on a specific sub-stack.

/*
 *
 * Time: 
 * Additonal space: 
 *
 */


//Solution 1:
var StackOfPlates = function(capacity) {
  if (arguments.length < 1) {
    throw new Error('capacity argument is required');
  }
  this._stacks = [[]];
  this._max = capacity;
};

//function takes in a value
StackOfPlates.prototype.push = function(value) {
  //if the length of the last stack is greater than the max capacity
  if (this._stacks[this._stacks.length - 1].length >= this.max) {
    //add a new empty stack 
    this._stacks.push([]);
  }
  //push the value into the last stack
  this._stacks[this._stacks.length - 1].push(value);
};

StackOfPlates.prototype.pop = function() {
  //grab the last value of 
  var value = this._stacks[this._stacks.length - 1].pop();
};