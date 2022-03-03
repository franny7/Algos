// https://leetcode.com/problems/longest-common-prefix/

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/*
  @param {string[]} strs
  @return {string}
 */

var longestCommonPrefix = function (strs) {
  let wordIndex = 0;
  let letterIndex = 0;
  let res = [];

  console.log(strs[wordIndex][letterIndex], strs[wordIndex + 1][letterIndex]);

  let helper = (strs, wordIndex, letterIndex) => {
    // base case
    if (strs[wordIndex][letterIndex] !== strs[wordIndex + 1][letterIndex]) {
      return res;
    }
    res.push(strs[wordIndex][letterIndex]);

    // recursive case
    if (strs[wordIndex][letterIndex] === strs[wordIndex + 1][letterIndex]) {
      res.push(strs[wordIndex][letterIndex]);
    }
  };

  helper(strs, wordIndex, letterIndex + 1);

  return res;
};
