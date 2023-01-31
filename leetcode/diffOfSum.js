// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

/*
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.


Example 1:
Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.

Example 2:
Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.

Constraints:
1 <= nums.length <= 2000
1 <= nums[i] <= 2000
*/

/*
  @param {number[]} nums
  @return {number}
*/
var differenceOfSum = function (nums) {
  // split into elements and digits
  let digits = nums.toString().split('');
  let elements = nums.toString().split(',');

  // get rid of excessive commas
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === ',') {
      digits.splice(i, 1);
    }
  }

  // convert strings into integers for both digits and els
  let digitsNums = [];
  for (let i = 0; i < digits.length; i++) {
    digitsNums.push(parseInt(digits[i]));
  }

  let elNums = [];
  for (let i = 0; i < elements.length; i++) {
    elNums.push(parseInt(elements[i]));
  }

  // use reduce to find the sum of both arr
  let digitVal = 0;
  let sumOfDigits = digitsNums.reduce((acc, curr) => acc + curr, digitVal);
  let sumOfEl = elNums.reduce((acc, curr) => acc + curr, digitVal);

  // return abs val of sum of both arrays
  return Math.abs(sumOfDigits - sumOfEl);
};
