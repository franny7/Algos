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

// use recursion helper method, pass in strs array, letterIndex(starting at 0), and result
// create character varibale to indicate each character
// loop through each word per same index of each word
// create base case; if the letterIndex is greater than strs.length - 1, return res
// if wordIndex is 0, set the char equal to that letter
// if the letter and the char do not match, return res
// if the letter through all the words in the array match, add the letter to res
// call helper (recursive function) by increasing the letterIndex by one

var longestCommonPrefix = function (strs) {
  return helper(strs, 0, '');
};

let helper = (strs, letterIndex, res) => {
  let char = null;
  for (let wordIndex = 0; wordIndex < strs.length; wordIndex++) {
    if (letterIndex > strs[wordIndex].length - 1) {
      return res;
    }
    if (wordIndex === 0) {
      char = strs[wordIndex][letterIndex];
    }
    if (strs[wordIndex][letterIndex] !== char) {
      return res;
    }
  }
  return helper(strs, letterIndex + 1, res + char);
};
