// https://leetcode.com/problems/add-digits/

/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0

Constraints:
0 <= num <= 231 - 1
*/

var addDigits = function (num) {
  if (isNaN(num) || num === 0) {
    return 0;
  }
  if (num < 10) {
    return num;
  }
  if (num % 9 === 0) {
    return 9;
  } else {
    return num % 9;
  }
};

// math solution! There was a pattern where the num is either less than 10 so we return it or the remainder divided by 9 would be the solution. O(1) runtime.
