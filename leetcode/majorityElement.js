// https://leetcode.com/problems/majority-element/

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
-109 <= nums[i] <= 109

Solution to the problem in linear time and in O(1) space!!!!!
*/

/*
  @param {number[]} nums
  @return {number}
 */

let majorityElement = (nums) => {
  // instantiate majority var and frequency counter
  let maj;
  let freq = 0;

  // loop through nums arr set current euqal to nums[i]. Check if freq is 0, if so set that as our maj el and freq equal to 1. else if current is equal to our maj el increment freq. else decrement freq.
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (freq === 0) {
      maj = current;
      freq = 1;
    } else if (current === maj) {
      freq++;
    } else {
      freq--;
    }
  }

  // return our majority element
  return maj;
};
