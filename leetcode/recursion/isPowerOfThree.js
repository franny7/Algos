// https://leetcode.com/problems/power-of-three/

/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.


Example 1:
Input: n = 27
Output: true

Example 2:
Input: n = 0
Output: false

Example 3:
Input: n = 9
Output: true
 

Constraints:
-231 <= n <= 231 - 1
 
Follow up: Could you solve it without loops/recursion?
*/

/*
 @param {number} n
  @return {boolean}
 */

var isPowerOfThree = function (n) {
  //  base case if n is equal to zero, n is not a multiple of 3, return false
  if (n === 0) {
    return false;
  }
  // base case if n is equal to one that means we got 3 divided by 3 which means it is a multpile of three, return true
  if (n === 1) {
    return true;
  }
  // if the remainder of n divided by 3 is 0, call our function recursively and pass in n/3 as its parameter so we can get to a smaller power of 3
  if (n % 3 === 0) {
    return isPowerOfThree(n / 3);
  }
  // return false by default
  return false;
};
