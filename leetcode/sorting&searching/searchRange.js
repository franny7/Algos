// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

/*
  @param {number[]} nums
  @param {number} target
  @return {number[]}
 */
var searchRange = function (nums, target) {
  // if nums arr is empty
  if (nums.length === 0) {
    return [-1, -1];
  }

  let startingPoint = -1;
  let endingPoint = -1;

  // edge cases if target is at start or end of arr
  if (nums[0] === target) {
    startingPoint = 0;
  }
  if (nums[nums.length - 1] === target) {
    endingPoint = nums.length - 1;
  }

  // binary searches
  let left;
  let right;
  let middle;

  if (startingPoint === -1) {
    left = 0;
    right = nums.length - 1;
    middle;

    while (left < right - 1) {
      middle = Math.floor((left + right) / 2);
      let middleElement = nums[middle];

      if (middleElement >= target) {
        right = middle;
      } else {
        left = middle;
      }
    }

    // do check to see if right pointer is on target
    if (nums[right] === target) {
      startingPoint = right;
    }
  }

  if (endingPoint === -1) {
    left = 0;
    right = nums.length - 1;
    middle;

    while (left < right - 1) {
      middle = Math.floor((left + right) / 2);
      let middleElement = nums[middle];

      if (middleElement <= target) {
        left = middle;
      } else {
        right = middle;
      }
    }

    // do check to see if left pointer is on target
    if (nums[left] === target) {
      endingPoint = left;
    }
  }

  return [startingPoint, endingPoint];
};
