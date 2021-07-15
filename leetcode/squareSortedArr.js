// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output:      [0,1,9,16,100]
// Explanation: After squaring, the array becomes
//[16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]

//               49, 9, 4, 9, 121

//                4,9,9,49,121

// Output:       []

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [-7, -3, 2, 3, 11][
  //  My solution

  // var sortedSquares = function(nums) {
  //     // loop through the original array and square each number
  //     let newArr = nums.map((num) => num * num)
  // console.log(newArr);
  // // return the array in increasing order
  //     return  newArr.sort((a, b) => a - b);
  // };

  // sortedSquares(nums)

  //  tangis solution

  (-7, -3, 2, 3, 11)
];

var sortedSquares = function (nums) {
  //creating new empty array
  let result = [];
  //initiate index at 0
  let i = 0;
  //creating a second var to loop through the entire arr
  for (let j = 0; j < nums.length; j++) {
    let temp = nums[j] * nums[i];
    result.push(temp);
    i++;
  }
  return result.sort((a, b) => a - b);
};

sortedSquares(nums);
