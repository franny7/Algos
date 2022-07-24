// https://leetcode.com/problems/backspace-string-compare/

/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.


Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.

Follow up: Can you solve it in O(n) time and O(1) space?
*/

/*
  @param {string} s
  @param {string} t
  @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // create stack for s and t
  const stackS = [];
  const stackT = [];

  // loop through s and t checking if the current index is equal to #, if so pop the last character in stack since # equals to backspace. If not equal to #, push the character to stack.
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '#') {
      stackS.pop();
    } else {
      stackS.push(char);
    }
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (char === '#') {
      stackT.pop();
    } else {
      stackT.push(char);
    }
  }

  // join each stack and compare them, if equal return true else return false
  let wordS = stackS.join('');
  let wordT = stackT.join('');

  return wordS === wordT;
};
