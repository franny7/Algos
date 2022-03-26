// https://leetcode.com/problems/monotonic-array/

/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

Example 2:
Input: nums = [6,5,4,4]
Output: true

Example 3:
Input: nums = [1,3,2]
Output: false
 
Constraints:
1 <= nums.length <= 105
-105 <= nums[i] <= 105
*/

/*
  @param {number[]} nums
  @return {boolean}
 */
var isMonotonic = function (nums) {
  // create status which will tell us if the array is in ascending or descending order as we iterate through nums
  let status = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // perform comparison
    if (nums[i] < nums[i + 1]) {
      // current less than following element
      if (status === 0) {
        status = 1;
      } else if (status === -1) {
        return false;
      }
    } else if (nums[i] > nums[i + 1]) {
      // current greater than following element
      if (status === 0) {
        status = -1;
      } else if (status === 1) {
        return false;
      }
    }
  }

  return true;
};
