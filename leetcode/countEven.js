// https://leetcode.com/problems/count-integers-with-even-digit-sum/

/*
Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.


Example 1:
Input: num = 4
Output: 2
Explanation:
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.

Example 2:
Input: num = 30
Output: 14
Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are
2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
 

Constraints:
1 <= num <= 1000
*/

/*
  @param {number} num
  @return {number}
 */
var countEven = function (num) {
  // create count var
  let count = 0;

  // loop as long as our num is greater than 1
  while (num > 1) {
    // turn our number into an array of its integers seperated into their own indices
    let arrNum = Array.from(String(num), Number);
    // create var to store our current numbers sum of its integers
    let currNumSum = 0;

    // map through the array we created per number and sum them up to our currNumSum
    arrNum.map((n) => {
      currNumSum += n;
    });

    // if the sum of our current number is even, increment our count
    if (currNumSum % 2 === 0) {
      count++;
    }
    // after checking if out current number was even, decrement to the next number
    num--;
  }
  // return our count
  return count;
};
