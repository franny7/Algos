// https://leetcode.com/problems/power-of-two/

/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x. 

Example 1:
Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:
Input: n = 3
Output: false

Constraints:
-231 <= n <= 231 - 1
*/

/*
  @param {number} n
  @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //  use the built in math method to be able to get the logarithm of n
  let cur = Math.log2(n);
  // check if there is a remainder once we have the power and return true if theres no remainder, return false if there is a remainder (meaning that 2 is not a power of that number)
  if (cur % 1 === 0) {
    return true;
  } else {
    return false;
  }
};
