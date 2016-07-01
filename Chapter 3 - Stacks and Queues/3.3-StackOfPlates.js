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
  if (this._stacks[this._stacks.length - 1].length >= this._max) {
    //add a new empty stack 
    this._stacks.push([]);
  }
  //push the value into the last stack
  this._stacks[this._stacks.length - 1].push(value);
};

StackOfPlates.prototype.pop = function() {
  //use native Array method pop to grab the 
  var value = this._stacks[this._stacks.length - 1].pop();
  //if there multiple stacks and if the last stack is empty
  if (this._stacks.length > 1 && this._stacks[this._stacks.length - 1].length === 0) {
    //drop empty stack
    this._stacks.pop();
  }
  //return the value popped
  return value;
};

StackOfPlates.prototype.popAt = function(indexNum) {
  //check if the input is a valid index number
  if (indexNum < 1 || indexNum > this._stacks.length) {
    //throw an error if its not
    throw new Error('stack indexNum is invalid');
  }
  
  //if the index number is equal to the number of stacks
  if (indexNum === this._stacks.length) {
    //return the last stack
    return this.pop();
  }

  var stack = this._stacks[indexNum - 1],
  value = stack.pop(),
  tempStack = [],
  nextStack;

  //move items from subsequent stacks forward to fill the gap
  if (indexNum < this._stacks.length) {
    for ( var i = indexNum; i < this._stacks.length; i++ ) {
      nextStack = this._stacks[i];
      //reverse next stack
      while (nextStack.length > 0) {
        tempStack.push(nextStack.pop());
      }
      stack.push(tempStack.pop());
      while (tempStack.length > 0) {
        nextStack.push(tempStack.pop());
      }
      stack = nextStack;
    }
  }

  //drop empty stacks
  if (this._stacks.length > 1 && this._stacks[this._stacks.length - 1]. length === 0) {
    this._stacks.pop();
  }

  return value;

};


var plateStack = new StackOfPlates(4);
plateStack.push(1);
plateStack.push(2);
plateStack.push(3);
plateStack.push(4);
console.log('plateStack 1', plateStack);
plateStack.push(5);
console.log('plateStack 1', plateStack);
plateStack.push(6);
console.log('plateStack 1', plateStack); //{ _stacks: [ [ 1, 2, 3, 4 ], [ 5, 6 ] ], _max: 4 }

//Checking if pop functionality works:
plateStack.pop();
console.log('plateStack 1', plateStack); //{ _stacks: [ [ 1, 2, 3, 4 ], [ 5 ] ], _max: 4 }
plateStack.pop();
console.log('plateStack 1', plateStack); //{ _stacks: [ [ 1, 2, 3, 4 ] ], _max: 4 }


//checking if popAt functionality works:
var plateStack2 = new StackOfPlates(3);
console.log('plateStack 2', plateStack2);
plateStack2.push(1);
plateStack2.push(2);
plateStack2.push(3);
plateStack2.push(4);
plateStack2.push(5);
plateStack2.push(6);
plateStack2.push(7);
plateStack2.push(8);
plateStack2.push(9);
console.log('plateStack2', plateStack2); //{ _stacks: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ], _max: 3 }
plateStack2.popAt(2);
console.log('plateStack2', plateStack2); //{ _stacks: [ [ 1, 2, 3 ], [ 4, 5, 7 ], [ 8, 9 ] ], _max: 3 }

