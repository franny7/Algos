// https://leetcode.com/problems/find-the-difference-of-two-arrays/

/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.


Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

Constraints:
1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000
*/

/*
  @param {number[]} nums1
  @param {number[]} nums2
  @return {number[][]}
 */

var findDifference = function (nums1, nums2) {
  // create 2 maps, for nums1 and nums2. create 2 empty arrays
  let map1 = {};
  let map2 = {};
  let firstArr = [];
  let secondArr = [];

  // loop through nums1 array while creating map1, start each new element/key at 1 and increment by one each time it reoccurs in nums1 array
  for (let i = 0; i < nums1.length; i++) {
    if (!map1[nums1[i]]) {
      map1[nums1[i]] = 1;
    } else {
      map1[nums1[i]]++;
    }
  }
  // loop through nums2 array while creating map2, start each new element/key at 1 and increment by one each time it reoccurs in nums2 array
  for (let j = 0; j < nums2.length; j++) {
    if (!map2[nums2[j]]) {
      map2[nums2[j]] = 1;
    } else {
      map2[nums2[j]]++;
    }
  }
  // loop through the keys in map1 while checking if the same key is in map2. if it is in both maps, delete them both
  for (let i in map1) {
    if (map2[i]) {
      delete map1[i];
      delete map2[i];
    }
  }

  // these last two loops are to push the uniques keys into two seperate arrays
  for (let key in map1) {
    firstArr.push(key);
  }
  for (let key in map2) {
    secondArr.push(key);
  }

  // return an array of the two arrays with their unique elements
  return [firstArr, secondArr];
};
