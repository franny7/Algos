// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:
1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

/*
  @param {number[]} nums
  @return {number}
*/
// Recursive Solution!!

var removeDuplicates = function (nums) {
  // call recursive function starting my two pointers at the 0 and 2 index
  return helper(nums, 0, 2);
};

// create helper recursive function
const helper = (nums, first, second) => {
  // as long as our second pointer hasn't passed our length of the array, continue looping
  while (second < nums.length) {
    // if our first pointer and our second pointer are equal, splice the second pointer's index. Else set our first pointer one index behind our second index and then set our second pointer to two indices ahead of our first index, doing this will make sure that they are both being incremented but also only 2 spots away from each other. (We can also just do first++ and second++)
    if (nums[first] == nums[second]) {
      nums.splice(second, 1);
    } else {
      first = second - 1;
      second = first + 2;
    }
  }
  // return our nums.length indices of our nums array (for example; if the array length is 5, this will return indices 0-4 which is the entire array)
  return nums.length;
};
