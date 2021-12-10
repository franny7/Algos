// https://leetcode.com/problems/majority-element-ii/submissions/

/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. 

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]

Example 3:
Input: nums = [1,2]
Output: [1,2]
 
Constraints:
1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
*/

/*
  @param {number[]} nums
  @return {number[]}
 */
var majorityElement = function (nums) {
  // 1. create a threshold variable
  let threshold = Math.floor(nums.length / 3);
  // 2. create an empty array to push in each element that surpasses the threshold
  let answer = [];
  // 3. create a map to track the occurences of each element
  let map = {};
  // 4. loop through nums and fill in our map with the key being each unique element and set the value to how many times it occurred
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }
  // 5. loop through our map and check if any of the values surpass the threshold, if so, push it into our empty array
  for (let [key, value] of Object.entries(map)) {
    if (value > threshold) {
      answer.push(key);
    }
  }
  // 6. return answer
  return answer;

  /////// solved this in 10 minutes!!! Proud moment

  ////Follow up: Could you solve the problem in linear time and in O(1) space?
};
