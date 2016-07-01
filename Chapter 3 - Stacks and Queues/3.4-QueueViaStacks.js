//3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

/*
 *
 * N = |MyQueue|
 * Time: enqueue O(1), dequeue O(N)
 * Additonal space: O(N) - to hold the input items
 *
 */


//Solution 1: Psuedoclassical implementation
var MyQueue = function() {
  //two stacks
  this.eStack = [];
  this.dStack = [];
};

//function takes in a value - enqueue adds to the end of a list
MyQueue.prototype.enqueue = function(value) {
  //push value into eStack
  this.eStack.push(value);
};

MyQueue.prototype.dequeue = function() {
  if (this.dStack.length === 0 && this.eStack.length === 0) {
    throw new Error('queue is empty');
  }

  //if the dequeue stack is empty
  if (this.dStack.length === 0) {
    //loop while the enqueue stack has items
    while (this.eStack.length > 0) {
      //put the items from the enqueue stack into the dequeue stack (reverse)
      this.dStack.push(this.eStack.pop());
    }
  }
  //return the first item in the queue
  return this.dStack.pop(); //since we reversed the enqueue stack and put them in the dequeue stack, popping the dequeue stack will result in FIFO
};