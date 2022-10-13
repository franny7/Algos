// https://leetcode.com/problems/smallest-even-multiple/

/*
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

Example 1:
Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.

Example 2:
Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

Constraints:
1 <= n <= 150
*/

/*
  @param {number} n
  @return {number}
 */
var smallestEvenMultiple = function (n) {
  // this recursive function will check if there is a smaller multiple than the product of n and 2
  let helper = (num, num2) => {
    if (num % 2 === 0 && num2 % 2 === 0) {
      return num / 2;
    }
  };

  // the product of n and 2 is a mulptiple of both so we can start there
  let roughMultiple = n * 2;

  // if n is even we'll call helper function to try and find a smaller multiple of roughMultiple, if there's no smaller multiple we return roughMult
  if (n % 2 === 0) {
    return helper(roughMultiple, n);
  } else {
    return roughMultiple;
  }
};
