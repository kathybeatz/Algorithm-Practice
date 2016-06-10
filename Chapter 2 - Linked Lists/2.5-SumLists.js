//2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. the digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

/*
input: (7->1->6) + (5->9->2). //617 + 295
output: (2->1->9) //912
*/


//SOLUTION 1: works if both linked lists have teh same length
//function should take in 2 lists, and a carry variable
var sumLists = function ( list1, list2, carry ) {
  //check if the input items are valid


  if ( list1 === null || list2 === null || carry === 0) {
    return null;
  }

  //create a results Node
  var result = new Node();

  //variable to hold carry
  var extra = carry || 0;

  //add carried number over
  var num = 0 + extra;

  //if list1 is not the last node
  if ( list1.value !== null ) {
    //add the current value of the node in list1 to num
    num += list1.value;
  } 
  //if list2 is not the last node
  if ( list2.value !== null ) {
    //add the current value of the node in list2 to num
    num += list2.value;
  }

  //in the new linked list, set the current node's value to the tenths digit of num
  console.log(num);
  result.value = num % 10;

  //if list1 or list2 are not at the last node

  if ( list1 !== null || list2 !== null ) {
    //set a new node by recursing through the next node in each of the lists, if num is greather than 10 - carry over a 1, otherwise carry over 0
    var node = sumLists( list1.value == null ? null : list1.next, list2.value == null ? null : list2.next, num >= 10 ? 1 : 0 );
    //set the next pointer to the new node
    result.next = node;
  }

  //return the result linked list
  console.log(result);
  return result;
};


//SOLUTION 2: linked lists of different lengths

var sumListsReverseOrder = function ( list1, list2 ) {
  var head = { next: null }, //create pseudonode
    tail = head,
    carry = 0,
    node1 = list1,
    node2 = list2;

  while ( node1 && node2 ) {
    sum = node1.val + node2.val + carry;
    if ( sum >= 10 ) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = new Node ( sum );
    node1 = node1.next;
    node2 = node2.next;
  }

  node1 = node1 || node2; //go through whatever is remaining of the longer list

  while ( node1 ) {
    sum = node1.val + carry;
    if ( sume >= 10 ) {
      carry = 1;
      sum -= 10;
    } 
    else {
      carry = 0;
    }
    tail = tail.next = new Node ( sum );
    node1 = node1.next;
  }

  if ( carry > 0 ) { //check for any remaining carry
    tail.next = new Node ( carry );
  }

  return head.next;
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



var list1 = new LinkedList();
var list2 = new LinkedList();
list1.addToTail(7);
list1.addToTail(1);
list1.addToTail(6);
list2.addToTail(5);
list2.addToTail(9);
list2.addToTail(2);
// console.log(linkedlist1);
// console.log(linkedlist2);
console.log( sumLists ( list1.head, list2.head ));


