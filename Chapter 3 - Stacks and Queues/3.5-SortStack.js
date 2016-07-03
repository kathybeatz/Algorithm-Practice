//3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data strcuture (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

/*
 *
 * N = |stack|
 * Time: O(N^2)
 * Additional space: O(1) - while there are 2 stacks there are only a fixed
 * number of items. 
 *
 */


//Solution 1:

//function takes in a stack
var sortStack = function(stack) {
  //create temporary stack
  var tempStack = [];
  //put the last item of the stack in to the temp stack
  tempStack.push(stack.pop());
  
  //loop as long as the stack is not empty
  while (!isEmpty(stack)) {
    //set current equal to the last item in the temporary stack
    var current = tempStack.pop();
    //set count to 0
    var count = 0;

    //loop as long as the temporary stack is not empty and the current item is less than the last item in the temporary stack
    while (!isEmpty(temp) && current < peek(tempStack)) {
      //
      stack.push(tempStack.pop());
      count++;
    }
    tempStack.push(current);
    for (var i = 0; i < count; i++) {
      tempStack.push(stack.pop());
    }
  }

  //loop as long as the temporary stack is not empty
  while (!isEmpty(temp)) {
    //
    stack.push(tempStack.pop());
  }

  return stack;
};

//return the value on the top of the stack
var peek = function(stack) {
  return stack[stack.length - 1];
};

//check if the stack is empty
var isEmpty = function(stack) {
  return stack.length === 0;
};