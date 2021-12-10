// https://leetcode.com/problems/palindrome-number/

/* Given an integer x, return true if x is palindrome integer.
 An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:
Input: x = -101
Output: false

Constraints:
-231 <= x <= 231 - 1
*/

/*
  @param {number} x
  @return {boolean}
 */
const isPalindrome = function (x) {
  // 1. split the number to make it iterable
  let num = x.toString().split('');
  // 2. create two variable for two pointer approach, one at the beginning of the string and the other at the end
  let start = 0;
  let end = num.length - 1;

  // 3. loop through the string swapping the two pointers as we iterate to the middle
  while (start < end) {
    [num[start], num[end]] = [num[end], num[start]];
    start++;
    end--;
  }
  // 4. make the new number array back into a number instead of array (using the split method truned it into an array)
  let newNum = num.join('');
  // 5. compare the original number to the one that we created
  if (newNum == x) {
    return true;
  }
  return false;

  ////// First solution below was not very efficient
  // if (x.toString() === x.toString().split('').reverse('').join('')) {
  //   return true;
  // } else {
  //   return false;
  // }
};
