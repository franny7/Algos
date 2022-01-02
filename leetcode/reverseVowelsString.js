// https://leetcode.com/problems/reverse-vowels-of-a-string/

/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/*
  @param {string} s
  @return {string}
 */

////// first solution very slow, 5% better than other solutions
// var reverseVowels = function(s) {
//     let vowels = [];
//     let string = s.split('');

//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
//             vowels.push(string[i]);
//             string.splice()
//             string[i] = '_';
//         }
//     }
//     vowels.reverse();

//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === '_') {
//             string.splice(i, 1, vowels[0]);
//             vowels.splice(0,1);
//         }
//     }
//     return string.join('');
// };

/////// second solution, faster than 97%
var reverseVowels = function (s) {
  let strArr = s.split('');
  let i = 0;
  let j = strArr.length - 1;

  const vowels = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true,
  };
  while (i < j) {
    if (!vowels[strArr[i]]) {
      i++;
    }
    if (!vowels[strArr[j]]) {
      j--;
    }
    if (vowels[strArr[i]] && vowels[strArr[j]]) {
      let temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;
      i++;
      j--;
    }
  }
  return strArr.join('');
};
