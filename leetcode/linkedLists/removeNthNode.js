/* https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
 */

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
  /*
  linked list solution
  1. iterate in reverse
  2. set a temp variable equal to our prev node
  3. check if index is equal to n
  4. if index is equal to n remove from list by connecting our temp variable to our node.next variable
  6. return linked list
  
  
  array solution
  1.find our head.length - n
  2.splice or pop the last element in our array.
  3.return array
  */
  let deleteNode = head.length - n - 1;
  let arr = head.splice(deleteNode, 1);
};
