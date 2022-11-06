// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/*
 @param {string} s
 @return {boolean}
 */
var isPalindrome = function (s) {
  // 1. turn string into lowercase and alphanumeric only
  let string = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  // 2. create empty array varibale
  let palindrome = [];
  // 3. loop through string backward and push every iteration string[i] into empty palindrome array
  for (let i = string.length - 1; i >= 0; i--) {
    palindrome.push(string[i]);
  }
  // 4. turn paldrome arrya into a string, if it is equal to our first string, return true else false
  return palindrome.join('') === string ? true : false;
};

// Ron's Outco solution!!! Map solution
/*
var isPalindrome = function(s) {
  let interesting = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM';

  let library = new Set();

  for (let i = 0; i < interesting.length; i++) {
    library.add(interesting[i]);
  }

  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (library.has(char)) {
      arr.push(char.toLowerCase());
    }
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
*/
