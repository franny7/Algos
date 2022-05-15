// https://leetcode.com/problems/di-string-match/submissions/

/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.


Example 1:
Input: s = "IDID"
Output: [0,4,1,3,2]

Example 2:
Input: s = "III"
Output: [0,1,2,3]

Example 3:
Input: s = "DDI"
Output: [3,2,0,1]
 

Constraints:
1 <= s.length <= 105
s[i] is either 'I' or 'D'.
*/

/*
  @param {string} s
  @return {number[]}
 */
var diStringMatch = function (s) {
  // create result var
  const result = [];

  // create two vars to keep track of what is the largest and smallest numbers remaining
  let smallest = 0;
  let largest = s.length;

  // loop through checking if the current char is "D" or "I". if I, push smallest remaining number to result. if D, push largest remaining number to result
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === 'I') {
      result.push(smallest);
      smallest++;
    } else {
      result.push(largest);
      largest--;
    }
  }
  // push the last remaining number to result
  result.push(largest);

  // return result
  return result;
};
