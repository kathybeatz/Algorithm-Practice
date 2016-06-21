//2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

//DEFINITION
//Circular linked list: A (corrupt) linked list in which a node's next pointer to an earlier node, so as to make alop in the linked list.

//EXAMPLE
//Input: A -> B -> C -> D -> E -> C [the same C as earlier]
//Output: C

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1:
var loopDetection = function ( list ) {
  //check if the list is valid
  if ( !list ) {
    //no loop
    return null;
  }

  //create slow and fast pointers
  var slow = list;
  fast = list;

  //loop as long as the pointer is not null
  while ( fast !== null && fast.next !== null) {
    //set the slow pointer at a rate of 1 step
    slow = slow.next;
    //set the fast pointer at a rate of 2 steps
    fast = fast.next.next;
    //if the fast and slow pointers are the same
    if ( fast === slow ) { //collision, meeting point
      //jump out of the loop
      break;
    }
  }
  //if the slow pointer is null or the slow and faster pointers do not equal each other 
  if ( !slow || slow !== fast ) {
    //no loop
    return null;
  }

  //set the slow pointer back to the head of the list
  slow = list;

  //loop until the fast and slow pointer meet again (find start of collision)
  /*
  Collision spot is k nodes before the start of the loop and linkedlistead is k nodes from the start of the loop
  */
  while ( slow !== fast ) {
  //move the slow pointer at a rate of 1 step
    slow = slow.next;
    //move the fast pointer at a rate of 1 step 
    fast = fast.next;
  }
  //return the fast pointer
  return fast;
};