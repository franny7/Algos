// https://leetcode.com/problems/next-greater-node-in-linked-list/

/*
You are given the head of a linked list with n nodes.

For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.

Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.

Example 1:
Input: head = [2,1,5]
Output: [5,5,0]

Example 2:
Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]
 

Constraints:
The number of nodes in the list is n.
1 <= n <= 104
1 <= Node.val <= 109
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
  @param {ListNode} head
  @return {number[]}
 */
var nextLargerNodes = function (head) {
  // create stack
  const stack = [];

  // create count var and set current equal to head
  let count = 0;
  let current = head;

  // while our current node is not null (as long as we haven't passed the last node), increment count and set current equal to our next node
  while (current !== null) {
    count++;
    current = current.next;
  }

  // create result var setting it equal to an empty array of the size of our nodes
  const result = new Array(count);

  // again set current equal to head so it can re start at the beginning, and creat index var starting at 0
  current = head;
  let index = 0;

  // push our current value and its index into our stack
  stack.push([current.val, index]);

  // again set current equal to current.next as our way of incrementing through our nodes, set index = 1
  current = current.next;
  index = 1;

  // as long as we haven't passed all our nodes, while our stack is not empty and our current nodes value is greater than stacks last elements first index (which is the value of that node), create popped var to pop the last index of our stack, and push the current nodes value to our result. push the current nodes value into our stackalong with its index, increment index, and set our current to current.next.
  while (current !== null) {
    while (stack.length > 0 && current.val > stack[stack.length - 1][0]) {
      let popped = stack.pop();
      result[popped[1]] = current.val;
    }
    stack.push([current.val, index]);
    index++;
    current = current.next;
  }

  // if there are any remaining elements in stack at the end, that means there is no next larger node so simply pop each one and set their place in result equal to 0
  while (stack.length > 0) {
    // pop from stack and set all indexes to 0
    let popped = stack.pop();
    result[popped[1]] = 0;
  }

  // retunr result
  return result;
};

/*
USED THIS APPROACH:
-create a stack
-create result array of length same as length of inpot array
-push first element and index - to stack
-loop from index 1 onwards
  -while current (index) is greater than last element of stack
      -pop from stack, then insert current at popped index location
  -push [current, index] to stack
  
-for any remaining elements in stack, set their indexes to 0



OTHER APPROACH (TRY THIS FOR PRACTICE)
Quadratic runtime:
-store all elements in an array
-iterate throguh each node, until we find the next larger node
-if not found update index element to be 0
*/
