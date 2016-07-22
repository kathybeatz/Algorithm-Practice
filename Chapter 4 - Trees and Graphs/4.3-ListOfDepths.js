//4.3 List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists);

//Solution 1: Travels through the tree and adds values into a list of linked lists. Each level of the tree is represented by a linked list.

function listTreeByDepthOrder(order) {
  var lists = [];
  addToLists(lists, tree.root, 0);
  return lists;
};

function addToLists(lists, node, depth) {
  if (node) {
    if(!lists[depth]) {
      lists[depth] = new LinkedList();
    }
  }
  lists[depth].append(node.val);

  addToLists(lists, node.left, depth + 1);
  addToLists(lists, node.right, depth + 1);
  }
};

