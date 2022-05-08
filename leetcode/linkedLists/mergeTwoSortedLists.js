// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/

/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. 

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/*
  Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
*/
/*
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
*/
var mergeTwoLists = function (l1, l2) {
  // check if both lists are empty, if so return null
  if (l1 === null && l2 === null) {
    return null;
  }
  // check if l1 is null, or if l2.val is less than l1.val, if so set l2.next equal to the function passing in l1 and the next node in l2, return l2
  if (l1 === null || (l2 !== null && l2.val < l1.val)) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  // by default set l1.next equal to the function passing in the next node in l1, return l1
  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
};

// Outco Solution
var mergeTwoLists = function (l1, l2) {
  // use this new node as a starting point, like a placeholder. set current to it
  const placeholder = new ListNode(null);
  let current = placeholder;

  // create variables for both the linked lists
  let u = l1;
  let v = l2;

  // loop through as long as u and v are both still not completed
  while (u !== null && v !== null) {
    // comparison
    if (u.val < v.val) {
      current.next = u;
      u = u.next;
    } else {
      current.next = v;
      v = v.next;
    }

    current = current.next;
  }

  // here we are making sure that the rest of whichever list hasn't been added will be added at the end once the other list has ended
  if (u !== null) {
    current.next = u;
  } else if (v !== null) {
    current.next = v;
  }

  // return pllaceholder.next because that will return the whole list and not just the first node (not just the placeholder)
  return placeholder.next;
};
