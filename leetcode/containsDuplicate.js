// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

/* 
@param {number[]} nums
@return {boolean}
*/
var containsDuplicate = function (nums) {
  // 1. sort the array to be able to compare the elements next to one another
  nums.sort();
  // 2. loop through the array and check if the current element is equal to the previous element, if so return true
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  // 3. By default return false as our base case, this will also guarantee that an array with length less than 2 will return false since there's nothing to compare
  return false;
};
