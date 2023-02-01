// https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/

/*
You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.


Example 1:
Input: nums = [1,3,2,1,3,2,2]
Output: [3,1]
Explanation:
Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

Example 2:
Input: nums = [1,1]
Output: [1,0]
Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.

Example 3:
Input: nums = [0]
Output: [0,1]
Explanation: No pairs can be formed, and there is 1 number leftover in nums.

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 100
*/

var numberOfPairs = function (nums) {
  let map = {};
  let pairs = 0;
  let length = 0;

  // create map and increment each value going through nums arr
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  // check if value is even or odd. if even divide by 2 and add to pairs val. if odd increment length since there'll be one elements remaining after pairs are added to pairs val.
  for (let [key, value] of Object.entries(map)) {
    if (value % 2 === 0) {
      pairs += value / 2;
    }
    if (value % 2 !== 0) {
      length++;
      pairs += (value - 1) / 2;
    }
  }
  return [pairs, length];
};

/*  ANOTHER SOLUTION SLIGHTLY MORE EFFICIENT!!! */
// Similar solution just changed up the for...of loop

var numberOfPairs = function (nums) {
  let map = {};
  let pairs = 0;
  let length = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let [key, value] of Object.entries(map)) {
    pairs += Math.floor(value / 2);
    if (value % 2 !== 0) {
      length++;
    }
  }
  return [pairs, length];
};
