// https://leetcode.com/problems/binary-search/

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1 

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/*
  @param {number[]} nums
  @param {number} target
  @return {number}
 */

var search = function (nums, target) {
  // create three pointers
  let start = 0;
  let end = nums.length;
  let mid;

  // loop through as long as start is less than end
  while (start <= end) {
    // set mid pointer to the middle index
    mid = Math.floor((start + end) / 2);

    // if the target number is equal to the number on the index of mid, return mid
    if (nums[mid] === target) {
      return mid;
    }
    // if the target is less than the number at our mid index, set our end var equal to the index before mid. else if the target is greater than the number at the mid index, set the start var equal to the index after mid.
    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  // if target is not in the nums array, return -1
  return -1;
};
