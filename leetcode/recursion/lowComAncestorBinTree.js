// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
  @param {TreeNode} root
  @param {TreeNode} p
  @param {TreeNode} q
  @return {TreeNode}
 */

// create recurisve function
const getPath = (root, target) => {
  // create a stack filled with the binary trees nodes twice
  const stack = [];
  stack.push([root, [root]]);

  let current, path;

  // loop through as long as the stacks length is greater than 0
  while (stack.length > 0) {
    // this step will pop from the stack per iteration
    [current, path] = stack.pop();

    // if the current node is equal to our target than return the path
    if (current === target) {
      return path;
    }

    // if there is a node at the left child, push it to our stack
    if (current.left !== null) {
      stack.push([current.left, path.concat(current.left)]);
    }
    // if there is a node at the right child, push it to our stack
    if (current.right !== null) {
      stack.push([current.right, path.concat(current.right)]);
    }
  }
};

// created this function to be able to view the path of each node given the specific p and q
// const printPath = (path) => {
//     for(let node of path){
//         console.log(node.val);
//     }
// }

var lowestCommonAncestor = function (root, p, q) {
  // call our recursive function twice, once for each target
  let pathP = getPath(root, p);
  let pathQ = getPath(root, q);

  // printPath(pathP);
  // printPath(pathQ);

  let i = 0;

  // loop through each path from our recursive functions path results
  while (i < pathP.length && i < pathQ.length) {
    // if the parent node of the paths i are not equal, return the node prev to the current index, then increment i
    if (pathP[i] !== pathQ[i]) {
      return pathP[i - 1];
    }
    i++;
  }

  // if i is greater than the length of pathP, return the previous value of the current index, else return pathQ's prev value of the current index
  if (i >= pathP.length) {
    return pathP[i - 1];
  } else {
    return pathQ[i - 1];
  }
};
