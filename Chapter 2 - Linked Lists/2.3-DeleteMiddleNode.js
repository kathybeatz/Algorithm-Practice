//2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1:

//function should take in a node
var deleteMiddleNode = function ( node ) {
  //check if that node is valid
  if ( !node || !node.next ) {
    throw new Error ('not a valid node');
  }

  //set that node's value to the value of the node after it
  node.value = node.next.value;
  //set that node's next pointer to the node that follows the next node
  node.next = node.next.next;

  return true;
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

var linkedlist = new LinkedList();
linkedlist.addToTail(1);
linkedlist.addToTail(2);
linkedlist.addToTail(3);
linkedlist.addToTail(4);
console.log(linkedlist);
console.log(linkedlist.deleteNode(2));