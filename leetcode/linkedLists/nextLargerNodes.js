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
  const stack = [];

  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  const result = new Array(count);

  current = head;
  let index = 0;

  stack.push([current.val, index]);

  current = current.next;
  index = 1;

  while (current !== null) {
    while (stack.length > 0 && current.val > stack[stack.length - 1][0]) {
      let popped = stack.pop();
      result[popped[1]] = current.val;
    }
    stack.push([current.val, index]);
    index++;
    current = current.next;
  }

  while (stack.length > 0) {
    // pop from stack and set all indexes to 0
    let popped = stack.pop();
    result[popped[1]] = 0;
  }

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
