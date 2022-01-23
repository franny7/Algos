// https://leetcode.com/problems/valid-parentheses/

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/*
  @param {string} s
  @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let p of s) {
    if (p === '(' || p === '{' || p === '[') {
      stack.push(p);
    } else {
      let last = stack.pop();
      let map = {
        '}': '{',
        ']': '[',
        ')': '(',
      };
      if (map[p] !== last) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
