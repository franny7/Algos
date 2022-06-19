// https://leetcode.com/problems/find-closest-number-to-zero/

/*
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

Example 1:
Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.

Example 2:
Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
 

Constraints:
1 <= n <= 1000
-105 <= nums[i] <= 105
*/

/*
  @param {number[]} nums
  @return {number}
 */
var findClosestNumber = function (nums) {
  // instantiate closest variable to infinity since we'll be looking for the smallest value so this will update on first iteration
  let closest = Infinity;

  // loop through checking absolute values of each nums[i] compared to closest variable. if the abs values are equal and nums[i] is greater than closest, set closest = nums[i]. That means that were taking whichever is positive instead of negative
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) === Math.abs(closest)) {
      if (nums[i] > closest) {
        closest = nums[i];
      }
    }
    // this checks which absolute value is smaller and updates our closest
    if (Math.abs(nums[i]) < Math.abs(closest)) {
      closest = nums[i];
    }
  }

  // return closest
  return closest;
};
