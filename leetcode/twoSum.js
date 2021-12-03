// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

    /////// TRY TO UNDERSTAND THIS MORE!
//     1. create map object using constructor to have access to built-in object methods
let myMap = new Map();
//     2. loop through nums array
    for(let i = 0; i < nums.length; i++) {
//         3.check if nums has an element with the value of 0, if so return [0, and the target values index], else we are creating a key value pair of (target-nums[i], and its index)
        if(myMap.has(nums[i])) {
            return [i, myMap.get(nums[i])];
        } else {
            myMap.set(target - nums[i], i);
        }
    }
};
