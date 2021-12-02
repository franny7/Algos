// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 
Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:
Input: digits = [0]
Output: [1]
Explanation: The array represents the integer 0.
Incrementing by one gives 0 + 1 = 1.
Thus, the result should be [1].

Example 4:
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

/*
  @param {number[]} digits
  @return {number[]}
 */

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 1. main base case, if we can add one without changing the previous number, just add 1 and return our array
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    }
    // 2. if we are at our index 0 and it's equal to 9, set the current 9 equal to 0, and add a new element to the begining of our array and set it to 1.
    if (i === 0 && digits[i] === 9) {
      digits[i] = 0;
      digits.unshift(1);
    }
    // 3. if an element that we are targeting is equal to 9, set it equal to 0
    if (digits[i] === 9) {
      digits[i] = 0;
    }
  }

  return digits;
};
