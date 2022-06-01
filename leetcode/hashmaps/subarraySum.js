// https://leetcode.com/problems/subarray-sum-equals-k/

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
 
Constraints:
1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/

/*
  @param {number[]} nums
  @param {number} k
  @return {number}
 */

var subarraySum = function (nums, k) {
  // base case
  if (nums.length === 0) {
    return 0;
  }

  // create map, sum, and count
  const map = {};
  let sum = 0;
  let count = 0;

  // loop through nums array. add each iteration to sum, if sum is = to k, increment count. check if map has value of sum-k, if so increment count by the value of sum-k. then add the sum to our map setting it to one or adding 1 to it.
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      count += 1;
    }
    if (map[sum - k]) {
      count += map[sum - k];
    }
    map[sum] = map[sum] + 1 || 1;
  }

  // return our count variable
  return count;
};
