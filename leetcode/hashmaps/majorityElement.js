// https://leetcode.com/problems/majority-element/submissions/

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1
*/

/*
  @param {number[]} nums
  @return {number}
 */

let majorityElement = (nums) => {
  // 1. create a threshold that the majority element needs to surpass
  const threshold = Math.floor(nums.length / 2);
  // 2. create an empty object to track the occurences of each element
  const map = {};
  // 3. loop though nums and throw in each value through each iteration, adding one to the already existing or setting the first occurence equal to one. if the value is greater than th ethreshold, return the value
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1;
    if (map[nums[i]] > threshold) {
      return nums[i];
    }
  }
};

// Follow-up: Could you solve the problem in linear time and in O(1) space?
