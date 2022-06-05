// https://leetcode.com/problems/percentage-of-letter-in-string/

/*
Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

Example 1:
Input: s = "foobar", letter = "o"
Output: 33
Explanation:
The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.

Example 2:
Input: s = "jjjj", letter = "k"
Output: 0
Explanation:
The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.
 

Constraints:
1 <= s.length <= 100
s consists of lowercase English letters.
letter is a lowercase English letter.
*/

/*
  @param {string} s
  @param {character} letter
  @return {number}
 */

var percentageLetter = function (s, letter) {
  //  create count variable to track occurences
  let count = 0;

  //  loop through s and increment our count if we come across our letter
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      count++;
    }
  }

  // return the rounded down number times 100 hundred so we can get the percentage of our letter
  return Math.floor((count / s.length) * 100);
};
