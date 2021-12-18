// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

/*
  @param {number[]} nums
  @return {number}
 */
let singleNumber = (nums) => {
  // Mapping solution to challenge myself
  //     1. create map variable
  let map = {};
  //     2. loop through nums array
  for (let i = 0; i < nums.length; i++) {
    //     3. check if key in map already exists, if so set its value to false bc that means there are two of them, if not initialize it to true
    if (map[nums[i]]) {
      map[nums[i]] = false;
    } else {
      map[nums[i]] = true;
    }
  }
  //     4. loop through map object, find first value that is equal to true and return its key,
  for (let [key, value] of Object.entries(map)) {
    if (value) {
      return key;
    }
  }

  //     This is the most efficient solution O(n)time and O(1)space
  //     let res = 0;

  //     for(let i = 0; i <nums.length; i++) {
  //         res = res ^ nums[i];
  //     }
  //     return res;

  ////// Explanation to the second solution
  /*
    Concept:
    If we take XOR of zero and some bit, it will return that bit
    a⊕0=a
    a⊕0=a
    If we take XOR of two same bits, it will return 0
    a⊕a=0
    a⊕a=0
    a⊕b⊕a=(a⊕a)⊕b=0⊕b=ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b
    So we can XOR all bits together to find the unique number.
  */
};
