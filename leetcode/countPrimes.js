// https://leetcode.com/problems/count-primes/

/*
Given an integer n, return the number of prime numbers that are strictly less than n.

Example 1:
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:
Input: n = 0
Output: 0

Example 3:
Input: n = 1
Output: 0
 
Constraints:
0 <= n <= 5 * 106
*/

/*
  @param {number} n
  @return {number}
 */

// create an array the length of n, fill them by default with the number 1
// initiate a count variable which will end up being our result
// loop through each digit starting at 2, continue looping as long as i is less than n and increment i by 1 each time
// as we loop through each index in arr, we will increment our count if the value of arr[i] is equal to 1. We will create a multiple var that will add i+i and as long as it is less than n we will set its index in arr equal to zero, then we will add i to multiple again and set that value equal to zero as long as the sum is less than n, continue the while loop until it's conditional statment is not true.
// we will do the previous step as we increment i in our for loop and once the loop is done we will return our count

var countPrimes = function (n) {
  const arr = new Array(n).fill(1);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (arr[i] === 1) {
      count++;

      let multiple = i + i;

      while (multiple < n) {
        arr[multiple] = 0;
        multiple += i;
      }
    }
  }
  return count;
};
