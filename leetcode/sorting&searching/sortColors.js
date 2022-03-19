// https://leetcode.com/problems/sort-colors/

/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:
n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.

Used only constant space. Didn't return anything.
*/

/*
 @param {number[]} nums
 @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  // create swapping function to swap to pointers down below
  let swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  // init variables for first pointer and second pointer and also index variable
  let start = 0;
  let end = nums.length - 1;
  let index = 0;

  // loop through nums arr until index is greater than end pointer, meaning that sorting is complete
  while (index <= end) {
    let cur = nums[index];

    // check cur value. if 2, swap it to put at the end of that arr and decrement end pointer. if 0, swap to start of arr and increment start pointer and index. if 1, only increment the index.
    if (cur === 2) {
      swap(index, end);
      end -= 1;
    } else if (cur === 0) {
      swap(index, start);
      index += 1;
      start += 1;
    } else if (cur === 1) {
      index += 1;
    }
  }
};
