// https://leetcode.com/problems/sort-array-by-increasing-frequency/

/*
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

Example 1:
Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Example 2:
Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

Example 3:
Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
 

Constraints:
1 <= nums.length <= 100
-100 <= nums[i] <= 100
*/

/*
  @param {number[]} nums
  @return {number[]}
 */
var frequencySort = function (nums) {
  // create map using built in Map, create result var
  let map = new Map();
  let res = [];

  // loop through nums array, if key doesnt exist create new one with value starting at one, if it already exists increment the value
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  // sort our map in ascending order from which key occurs less to which one occurs most
  let sortedArr = [...map.entries()].sort((a, b) =>
    a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]
  );

  // loop through new sortedArr pushing the key (indexed 0) in our array and decrementing its value(indexed 1) until every value is at 0;
  for (let i = 0; i < sortedArr.length; i++) {
    while (sortedArr[i][1] > 0) {
      res.push(sortedArr[i][0]);
      sortedArr[i][1] -= 1;
    }
  }
  // return result
  return res;
};
