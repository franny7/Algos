// https://leetcode.com/problems/divide-array-into-equal-pairs/

/*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.


Example 1:
Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation: 
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.
 

Constraints:
nums.length == 2 * n
1 <= n <= 500
1 <= nums[i] <= 500
*/

/*
  @param {number[]} nums
  @return {boolean}
 */
var divideArray = function (nums) {
  // create map to keep track of how many times the same digit occurs
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  // loop through our map checking if there are an even number of each value. If there's a value with an odd number of occurances, return false else return true
  for (let value in map) {
    if (map[value] % 2 !== 0) {
      return false;
    }
  }
  return true;
};

// We on the second for loop we already know that the array nums given is going to be an even number of elements so we just need to check to see if each value occurs an even amount of times
