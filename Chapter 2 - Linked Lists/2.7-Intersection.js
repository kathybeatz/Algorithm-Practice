//2.7 Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1:
//function takes in two linked lists 
var doIntersect = function ( list1, list2 ) {
  //get the lengths of both of the lists
  var len1 = getLength(list1);
  var len2 = getLength(list2);

  // if the lists are not the same length then make the longer list skip the length difference
  list1 = skip(list1, len1-len2);
  list2 = skip(list2, len2-len1);

  var node1 = list1,
  node2 = list2;
  // console.log('node2 - first', node2);

  //loop as long as it is not the last node for either list
  while ( node1 && node2 ) {
    //need to stringify to compare 
    var node1string = JSON.stringify(node1);
    var node2string = JSON.stringify(node2);
    //if the 2 current nodes match
    if ( node1string === node2string ) {
      //return the node
      return node1.value;
    }
    //move the nodes on each list down
    node1 = node1.next;
    node2 = node2.next;
  }
  //if there is no intersection return undefined
  return undefined;
};

function skip(list, num) {
  var node = list.head;
  while (num > 0) {
    list.head = node.next.next;
    num--;
  }
  return list.head;
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

function addIntersection ( list, intersectlist ) {
  var common = intersectlist;
  var node = list.head;
  while ( node ) {
    if ( node.next === null ) {
      node.next = common;
      node = node.next;
      // console.log(node);
      while ( node ) {
        if ( node.next === null ) {
          list.tail = node;
          // console.log(list);
          return list;
        }
        node = node.next;
      }
    } 
    node = node.next;
  }
  return list;
};

var a = new Node(7);
var b = new Node(2);
var c = new Node(1);
a.next = b;
b.next = c;

//create two linked lists
var list1 = new LinkedList();
list1.addToTail(3);
list1.addToTail(1);
list1.addToTail(5);
list1.addToTail(9);
list1.addToTail(a);
addIntersection(list1, a);

var list2 = new LinkedList();
list2.addToTail(4);
list2.addToTail(6);
list2.addToTail(a);
addIntersection(list2, a);



console.log('final', doIntersect(list1, list2)); //should return true