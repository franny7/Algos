// https://leetcode.com/problems/squares-of-a-sorted-array/

/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

/*
  @param {number[]} nums
  @return {number[]}
 */

/////best solution

var sortedSquares = function (nums) {
  //     1. loop through nums and square each element
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  //     2. sort our new numbers, return array
  return nums.sort((a, b) => a - b);
};

/////similar solution but while loop instead of for loop
// let i = 0;
// while(i < nums.length) {
//     nums[i] = nums[i] * nums[i];
//     i++;
// }
// return nums.sort((a,b) => return a - b);

///// another solution using array with two pointers
// //creating new empty array
// let result = [];
// //initiate index at 0
// let i = 0;
// //creating a second var to loop through the entire arr
// for (let j = 0; j < nums.length; j++) {
//   let temp = nums[j] * nums[i];
//   result.push(temp);
//   i++;
// }
// return result.sort((a, b) => a - b);

/////// Another solution using .map()
// var sortedSquares = function(nums) {
//     // loop through the original array and square each number
//     let newArr = nums.map((num) => num * num)
// console.log(newArr);
// // return the array in increasing order
//     return  newArr.sort((a, b) => a - b);
// };

///// If I can figure out a way to sort the array as I loop through it on line 32 it might help the time complexity
///// was able to finish this solution in four minutes though with pseudocode, not bad
