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
    //current equals the top of the stack
    var current = stack.pop();
    var count = 0;
    
    //loop as long as temp stack isnt empy and current is less than the top of temp stack
    while (!isEmpty(tempStack) && current < peek(tempStack)) {
      //pop off items in temp stack that are greater than the current back into the input stack
      stack.push(tempStack.pop());
      //increment the count each time item is popped off from temp stack
      count++;
    }

    //if the current is not less than item on the top of the temp stack, add it to the top of the stack
    tempStack.push(current);

    //put back the items into temp stack that were removed 
    for (var i = 0; i < count; i++) {
      tempStack.push(stack.pop());
    }

  }

  //put the ordered stack held in temp stack back in the original stack array in reverse
  while (!isEmpty(tempStack)) {
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
