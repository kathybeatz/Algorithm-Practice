//2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1: Get the length of the linked list, go through first half of the linked list and push values onto a stack. If the linked list has an odd length, skip the middle element. Compare the second half of the linked list to the values popped off the stack. 
var isPalindromeStack = function ( list ) {
  var length = getLength(list);

  //if the length of the list is 1 or 0
  if ( length <= 1 ) {
    //the list is a palindrome
    return true;
  }

  //create a stack
  var stack = [],
      //grab the head of the linked list
      node = list.head;
  //loop through the first half of the linked list 
  for ( var i = Math.floor(length/2); i > 0; i-- ) {
    //push the node value into the stack
    stack.push(node.value);
    //set the current node to the next node
    node = node.next;
  }

  //if the length of the linked list is odd
  if ( (length % 2) === 1 ) {
    //skip the middle node
    node = node.next;
  }

  //loop through the second half of the linked list
  while ( node ) {
    //and compare the node values to those popped off in the stack
    if ( node.value !== stack.pop() ) {
      // if they dont match, return false
      return false;
    }
    //set the current node to the next node
    node = node.next;
  }
};


/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 2: Reverse the linked list, compare to original (only need to compare first half)
//function should take in a linked list
var isPalindromeReverse = function ( list ) {
  //get the length of the linked list
  var length = getLength(list);

  //if the length of the list is 1 or 0
  if ( length <= 1 ) {
    //the list is a palindrome
    return true;
  }

  //grab the head of the list
  var node = list.head,
      half = Math.floor(length/2),
      mid;

  //find the middle node
  for ( var i = half; i > 0; i-- ) {    
    mid = node;
    //set the current node to the next node
    node = node.next;
  } 

  //reverse the first half of the linked list
  var tail = reverse(node, mid),
    isPalindrome = true,
    prev = null,
    next;

  //walk from start to middle and end to middle comparing values

  //start with the head of the original list
  node = list.head;
  //iterate through the first half of the orig linked list and the entire reversed first half of the linked list
  for (var i = half; i > 0; --i) {
    //set the boolean whether both node values from each list match
    isPalindrome = isPalindrome && node.value === tail.value;
    //move down the reversed list
    next = tail.next;
    tail.next = prev;
    prev = tail;
    tail = next;
    //move down the original linked list
    node = node.next;

  }

  //return the result
  return isPalindrome;
};


function reverse(node, end) {
  var prev = end,
    next;
  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};


//////////////////////////
//Creating a Linked List//
//////////////////////////
function Node ( value ) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

function LinkedList () {
  var list = {};
  list.head = null;
  list.tail = null;

//Add a node to the end of a linked list
  list.addToTail = function(value) {
    var newTail = Node(value);

    if ( !list.head ) {
      list.head = newTail;
    }

    if ( list.tail ) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
  
  };

//Remove the first node
  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }

    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;

  };

  list.contains = function(target) {
    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    } 
    return false;
  };

//Deleting a Node from a Singly Linked List
  list.deleteNode = function ( target ) {
    var node = list.head;

    if ( node.value === target ) {
      return list.head.next;
    }

    while ( node.next !== null ) {
      if ( node.next.value === target ) {
        node.next = node.next.next;
        return list.head;
      }
      node = node.next;
    }
  };
  
  return list;
};

function getLength ( list ) {
  var length = 0;
  var node = list.head;
  while ( node ) {
    length += 1;
    node = node.next;
  }
  return length;
};


//testing proper palindrome
var linkedlist = new LinkedList();
linkedlist.addToTail(0);
linkedlist.addToTail(1);
linkedlist.addToTail(2);
linkedlist.addToTail(1);
linkedlist.addToTail(0);
console.log(isPalindromeReverse(linkedlist)); //should return true

//testing non-palindrome
var linkedlist2 = new LinkedList();
linkedlist2.addToTail(0);
linkedlist2.addToTail(2);
linkedlist2.addToTail(1);
console.log(isPalindromeReverse(linkedlist2)); //should return false