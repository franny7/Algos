// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

 @param {number[]} nums
 @param {number} k
 @return {void} Do not return anything, modify nums in-place instead.
*/

var rotate = function (nums, k) {
  let n = nums.length;
  // if k > n (ex: rotate([1,2], 5),  result = [2,1])
  // in this case, k below is equal to 1
  if (k % n) {
    k = k % n;
  }
  // swaping the list inplace for O(1) space complexity
  // splice into nums, start at 0, delete nothing, starting at n-k throw in the rest of nums (...nums) starting at the value of n-k
  nums.splice(0, 0, ...nums.splice(n - k));
};

///// Was trying to complete this solution but not sure what was missing
// let i = nums.length;
// while(k > 0 && i--) {
//     let lastEl = nums.pop();
//     nums.unshift(lastEl);
//     k--;
// }
// return nums;
