// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

// Constraints:
// -231 <= x <= 231 - 1

/*
  @param {number} x
  @return {boolean}
 */
const isPalindrome = function (x) {
  if (x.toString() === x.toString().split('').reverse('').join('')) {
    return true;
  } else {
    return false;
  }
};

// Explanation: .toString to both sides to make them both strings, on the right side we split the string then reverse it and then join them back together. Next we just return true or false depending on the comparison.
