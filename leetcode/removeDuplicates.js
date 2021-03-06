// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/*
Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/*
  @param {number[]} nums
  @return {number}
 */
var removeDuplicates = (nums) => {
  // 1. initiate first pointer
  let i = 0;
  // 2. initiate second pointer
  for (let j = 1; j < nums.length; j++) {
    // 3. check if the first pointer [0] is not equal to the second pointer [1], if they aren't equal increment i (j is auto incrementing with the for loop)
    if (nums[i] !== nums[j]) {
      // 4. increment i once to leave the prev i equal to the value it currently had, and then set the new i equal to the value of j
      i++;
      nums[i] = nums[j];
    }
  }
  // 5. return i + 1 to return the first i + 1 indices values in nums array
  return i + 1;
};
