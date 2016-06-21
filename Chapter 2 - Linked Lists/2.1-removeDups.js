//2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1:

//function takes in a linked list
var removeDups = function ( list ) {
  //set node to the head node
  var node = list.head;
  //create an object to check for dups
  var obj = {};
  //create a variable to hold the previous node
  var previous = null;

  //loop as long as its not the last node
  while ( node !== null ) {
    //check if the the 
    if ( !obj[node.value] ) {
      obj[node.value] = node.value;
      previous = node;
    }
    else {
      previous.next = node.next;
    }
    node = node.next;
  }
  return list;
};

var linkedlist = new LinkedList();
linkedlist.addToTail(1);
linkedlist.addToTail(2);
linkedlist.addToTail(3);
linkedlist.addToTail(4);
linkedlist.addToTail(3);
linkedlist.addToTail(4);
console.log( removeDups(linkedlist) );


/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 2: No buffer, iterate with two pointers: CURRENT which iterates through the linked list, and RUNNER which checks all subsequent nodes for duplicates

//function takes in a list
var deleteDupes = function ( list ) {
  //set the current node to the head node
  var currentNode = list.head;
  //set the runner to null
  var runner = null;
  //loop as long as the current node isn't the last node
  while ( currentNode !== null ) {
    //set the runner to the current node
    runner = currentNode;
    //loop as long as the runner is not null (runner is ahead of current by one)
    while ( runner.next != null ) {
      //if the runner is equal to the current value
      if ( runner.next.value === currentNode.value ) {
        //delete the duplicate
        runner.next = runner.next.next;
      } else {
        //make the runner move on to the next value
        runner = runner.next;
      }
    }
    //set the currentNode to the next node
    currentNode = currentNode.next;
  }
  //return the linked list
  return list;
};

var linkedlist = new LinkedList();
linkedlist.addToTail(1);
linkedlist.addToTail(2);
linkedlist.addToTail(3);
linkedlist.addToTail(4);
linkedlist.addToTail(3);
linkedlist.addToTail(4);
console.log( linkedlist.head );
console.log( deleteDupes(linkedlist) );





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