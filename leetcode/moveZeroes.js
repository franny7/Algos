// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

/*
 @param {number[]} nums
 @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  // 1. create a temporary array to hold our zeroes
  let zeroes = [];
  // 2. loop through our nums array
  for (let i = 0; i < nums.length; i++) {
    // 3. if our current element is equal to 0, throw our current element into our zeroes array and splice the index we are on, also decrement one because our current loop auto increments so it will skip an index if we don't decrement
    if (nums[i] === 0) {
      zeroes.push(nums[i]);
      nums.splice(i, 1);
      i--;
    }
  }
  // 4. loop through our zeroes array and push each zero to our nums array
  for (let j = 0; j < zeroes.length; j++) {
    nums.push(zeroes[j]);
  }
};

// Below is an example of using two pointers, but in this case it's not as effecient as using array data structure. The above array solution is more effecient in this case.

//     let left = 0;
//     let right = nums.length - 1;

//     if(!nums.includes(0)) {
//         return nums;
//     }
//     while(left < right) {
//         if(nums[left] !== 0) {
//             left++;
//         }
//         if(nums[right] === 0) {
//             right--;
//         }
//         if(nums[left] === 0) {
//             nums.push(nums.splice(nums.indexOf(nums[left]), 1)[0]);
//         }
//     }
//     return nums;
