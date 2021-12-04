// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

var reverseString = function (s) {
  // 1. Create two pointers, one on the first character and the other at the last character
  let left = 0;
  let right = s.length - 1;
  // 2. loop through the string and continue while the two pointers dont intersect
  while (left < right) {
    // 3. swap the left pointer value with the right pointer value and increment and decrement until the while loop is done iterating
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

//////// Most optimal solution!!!
