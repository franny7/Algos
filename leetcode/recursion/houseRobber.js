// https://leetcode.com/problems/house-robber/

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 
Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 
Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

/*
 @param {number[]} nums
 @return {number}
 */
var rob = function (nums) {
  // create cache for dynamic programming
  const cache = {};
  // create helper function for recursion
  const maximizeMoney = (index) => {
    // check if index that is passed into the recursive iteration is in the cache. If so, return the value. If index is greater than the length of nums arr, return 0
    if (index in cache) {
      return cache[index];
    }
    if (index >= nums.length) {
      return 0;
    }

    // create two variables to find the value of the current index plus the next index or the index after that
    let left = nums[index] + maximizeMoney(index + 2);
    let right = maximizeMoney(index + 1);

    // set our value to the max value of left and right variables
    cache[index] = Math.max(left, right);
    return cache[index];
  };
  // initiate our recursive funciton to start athe first index of the nums array
  return maximizeMoney(0);
};
