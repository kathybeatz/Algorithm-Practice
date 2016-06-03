//2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

//Solution 1: 
/*
Walk one pointer ahead k nodes first
then create a 2nd pointer to the start of the list
Walk both pointers until the first one hits the end of the list
At that point the 2nd pointer will be pointing to the kth to the last node
*/

var kthToTheLastTwoPointers = function ( list, k ) {
  var last = list.head;
  var kth = list.head;

  //make last pointer k nodes ahead of kth pointer
  for ( var i = 0; i < k; i++ ) {
    last = last.next;
    if ( !last ) {
      console.log('list is not long enough');
    }
  }

  //loop until the last pointer reaches the end of the list
  while ( last.next ) {
    last = last.next;
    //kth pointer begins from the 1st node
    kth = kth.next;
  }

  //kth pointer points to kth to the last node
  return kth.value;  
};


// var linkedlist = new LinkedList();
// linkedlist.addToTail(1);
// linkedlist.addToTail(2);
// linkedlist.addToTail(3);
// linkedlist.addToTail(4);
// console.log( linkedlist.head );
// console.log( kthToTheLastTwoPointers(linkedlist, 1) );


//Solution 2: 
/*
Determine the length of the linked list
Subtract k from the calculated length
Skip that many nodes from the start of the list
That node is the kth to last
*/

var getLength = function ( list ) {
  var length = 0;
  var node = list.head;
  while ( node ) {
    length += 1;
    node = node.next;
  }
  return length;
};


var kthToTheLastLength = function ( list, k ) {
  if ( !list ) {
    throw new Error('invalid list');
  }

  var length = getLength(list);
  skip = length - k;
  node = list.head;

  if ( skip <= 0 ){
    throw new Error('list is not long enough');
  }

  for ( var i = 1; i < skip; i++ ) {
    node = node.next;
  }
  return node.value;
};

// var linkedlist = new LinkedList();
// linkedlist.addToTail(1);
// linkedlist.addToTail(2);
// linkedlist.addToTail(3);
// linkedlist.addToTail(4);
// console.log( linkedlist.head );
// console.log( kthToTheLastLength(linkedlist, 1) );





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