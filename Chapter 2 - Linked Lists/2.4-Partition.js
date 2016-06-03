//2.4 Partition: Write code to partition a linked list around a value x, such that all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. 


var partition = function ( list, x ) {
  var smallerHead = null;
  var smallerTail = null;
  var largerHead = null;
  var largerTail = null;

  var node = list.head;

  //loop until the end of the linked list
  while ( node !== null ) {
    //save the value of the value after the current node
    next = node.next;
    //set the current node's next pointer to null each time
    node.next = null;
    //if the node's value is less than the partition
    if ( node.value < x ) {
      //if no head is set
      if ( smallerHead === null ) {
        //set the head to the current node
        smallerHead = node;
        //set the tail to the head node (since one node)
        smallerTail = smallerHead;
      //otherwise
      } else {
        //add the current node to the list
        smallerTail.next = node;
        //set the tail to the current node
        smallerTail = node; 
        console.log('smallerTail', smallerTail);
      }
    //if the node's value is more than the partition
    } else {
      //if no head is set
      if ( largerHead === null ) {
        //set the head to the current node
        largerHead = node;
        //set the tail to the head node (since one node)
        largerTail = largerHead;
        console.log('largerTail', largerTail);
      //otherwise
      } else {
        //add the current node to the list
        largerTail.next = node;
        //set the taile to the current node
        largerTail = node;
      }
    }
    //set the current node to the next node
    node = next;
  }

  //merge the two lists
  smallerTail.next = largerHead;
  //return the newly formed list
  return smallerHead;
};

var linkedlist = new LinkedList();
linkedlist.addToTail(3);
linkedlist.addToTail(5);
linkedlist.addToTail(8);
linkedlist.addToTail(5);
linkedlist.addToTail(10);
linkedlist.addToTail(2);
linkedlist.addToTail(1);
console.log('linkedlist', linkedlist.head );
console.log('partition', partition(linkedlist, 5) );



