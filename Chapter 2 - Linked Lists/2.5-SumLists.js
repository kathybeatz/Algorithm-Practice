//2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. the digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

/*
input: (7->1->6) + (5->9->2). //617 + 295
output: (2->1->9) //912
*/

//function should take in 2 lists, and a carry variable
var sumLists = function ( list1, list2, carry ) {
  //check if the input items are valid
  if ( list1 === null || list2 === null || carry === 0) {
    return null;
  }

  //create a results Node
  var result = new Node();

  //variable to hold carry
  num = carry;
  //if list1 is not the last node
  if ( list1 !== null ) {
    //add the current value of the node in list1 to num
    num += list1.value;
  } 
  //if list2 is not the last node
  if ( list2 !== null ) {
    //add the current value of the node in list2 to num
    num += list2.value;
  }

  //in the new linked list, set the current node's value to the tenths digit of num
  result.value = num % 10;

  //if list1 or list2 are not at the last node
  if ( list1 !== null || list2 !== null ) {
    //set a new node by recursing through the next node in each of the lists
    var node = addLists( list1 == null ? null : list1.next, list2 == null ? null : list2.next, num >= 10 ? 1 : 0 );
    //set the next pointer to the new node
    result.next(node);
  }

  //return the result linked list
  return list;
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

var linkedlist1 = new LinkedList();
var linkedlist2 = new LinkedList();
linkedlist1.addToTail(7);
linkedlist1.addToTail(1);
linkedlist1.addToTail(6);
linkedlist2.addToTail(3);
linkedlist2.addToTail(9);
linkedlist2.addToTail(2);
console.log(linkedlist1);
console.log(linkedlist2);


