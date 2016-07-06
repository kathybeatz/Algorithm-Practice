//3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data strcuture (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

/*
 *
 * N = |stack|
 * Time: O(N^2)
 * Additional space: O(1) - while there are 2 stacks there are only a fixed
 * number of items. 
 *
 */


//Solution 1: Sort the stack by taking one item off the input stack at a time (current), find the right place within the process items in the temp stack to insert into. Insertion is done by holding the next value aside and moviing the temp stack values into the input stack until the right spot is found.

//function takes in a stack
var sortStack = function(stack) {
  //create temporary stack
  var tempStack = [];
  //put the last item of the stack in to the temp stack
  tempStack.push(stack.pop());
  
  //loop as long as the stack is not empty
  while (!isEmpty(stack)) {
    //set current equal to the last item in the temporary stack
    var current = stack.pop();
    //set count to 0
    var count = 0;

    //loop as long as the temporary stack is not empty and the current item is less than the last item in the temporary stack
    while (!isEmpty(tempStack) && current < peek(tempStack)) {
      //push the item at the top of the 
      stack.push(tempStack.pop());
      count++;
    }

    tempStack.push(current);
    
    for (var i = 0; i < count; i++) {
      tempStack.push(stack.pop());
    }

  }

  //loop as long as the temporary stack is not empty
  while (!isEmpty(tempStack)) {
    //
    stack.push(tempStack.pop());
  }

  //return the sorted stack
  return stack;
};


//return the value on the top of the stack
function peek(stack) {
  return stack[stack.length - 1];
};

//check if the stack is empty
function isEmpty(stack) {
  return stack.length === 0;
};

var unSortedStack = [1,3,2,5,4];
console.log(sortStack(unSortedStack));
