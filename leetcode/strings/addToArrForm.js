// https://leetcode.com/problems/add-to-array-form-of-integer/description/

/*
The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

Example 1:
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

Constraints:
1 <= num.length <= 104
0 <= num[i] <= 9
num does not contain any leading zeros except for the zero itself.
1 <= k <= 104
*/

/*
  @param {number[]} num
  @param {number} k
  @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let carry = 0;
  k = k
    .toString()
    .split('')
    .map((char) => {
      return parseInt(char);
    });
  let result = [];

  let i = num.length - 1;
  let j = k.length - 1;

  while (i > -1 && j > -1) {
    let numDigit = num[i];
    let kDigit = k[j];

    let sum = numDigit + kDigit + carry;

    if (sum < 10) {
      carry = 0;
      result.push(sum);
    } else {
      carry = 1;
      result.push(sum % 10);
    }
    i--;
    j--;
  }

  while (i > -1) {
    let numDigit = num[i];
    let sum = numDigit + carry;

    if (sum < 10) {
      carry = 0;
      result.push(sum);
    } else {
      carry = 1;
      result.push(0);
    }

    i--;
  }

  while (j > -1) {
    let kDigit = k[j];
    let sum = kDigit + carry;

    if (sum < 10) {
      carry = 0;
      result.push(sum);
    } else {
      carry = 1;
      result.push(0);
    }

    j--;
  }

  if (carry === 1) {
    result.push(1);
  }

  return result.reverse();
};

// add pseudocode!!!
