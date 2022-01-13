// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

/*
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers. 

Example 1:
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.

Example 2:
Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.

Example 3:
Input: nums = [3,3]
Output: 3
Explanation:
The smallest number in nums is 3.
The largest number in nums is 3.
The greatest common divisor of 3 and 3 is 3.

Constraints:
2 <= nums.length <= 1000
1 <= nums[i] <= 1000
*/

/*
  @param {number[]} nums
  @return {number}
 */
var findGCD = function (nums) {
  // create variables for minimum number and maximum number
  let min = Infinity;
  let max = 0;
  // let temp;

  // loop through nums array and check per iteration if the element is lower than the current min or higher than the current max, if so set it as min or max
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  // use Euclid's algorithm to find the greatest common denominator
  while (min > 0) {
    [max, min] = [min, max % min];
    // temp = min;
    // min = max % min;
    // max = temp;
  }

  return max;
};
