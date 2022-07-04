// https://leetcode.com/problems/rearrange-characters-to-make-target-string/

/*
You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.


Example 1:
Input: s = "ilovecodingonleetcode", target = "code"
Output: 2
Explanation:
For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
We can make at most two copies of "code", so we return 2.

Example 2:
Input: s = "abcba", target = "abc"
Output: 1
Explanation:
We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
We can make at most one copy of "abc", so we return 1.
Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".

Example 3:
Input: s = "abbaccaddaeea", target = "aaaaa"
Output: 1
Explanation:
We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
We can make at most one copy of "aaaaa", so we return 1.
 

Constraints:
1 <= s.length <= 100
1 <= target.length <= 10
s and target consist of lowercase English letters.
*/

/*
  @param {string} s
  @param {string} target
  @return {number}
 */
var rearrangeCharacters = function (s, target) {
  // create two maps, one for the targets frequencies and the other for s frequencies
  const targetFreq = {};
  const sFreq = {};

  // check if i in target map exists if it does increment else set to 1
  for (let i = 0; i < target.length; i++) {
    let char = target[i];

    if (char in targetFreq) {
      targetFreq[char]++;
    } else {
      targetFreq[char] = 1;
    }
  }

  // check if i in s map exists if it does increment else set to 1
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char in sFreq) {
      sFreq[char]++;
    } else {
      sFreq[char] = 1;
    }
  }

  let result = Infinity;

  // loop through target map, if theres no target character in s map return 0 since that means theres no solutions
  for (let targetChar in targetFreq) {
    if (!(targetChar in sFreq)) {
      // target char doesn't exist in s, no solutions possible
      return 0;
    } else {
      let sOccurences = sFreq[targetChar];
      let targetOccurences = targetFreq[targetChar];

      // return the result which would be the divisor of sOccurences and targetOccurences
      result = Math.min(result, Math.floor(sOccurences / targetOccurences));
    }
  }

  return result;
};
