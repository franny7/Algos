// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Constraints:
// -231 <= x <= 231 - 1

/*
  @param {number} x
  @return {number}
 */
var reverse = function (x) {
  let string = x.toString().split('');
  if (string[0] === '-') {
    string.splice(0, 1);
  }

  let number = string.reverse().join('');
  let answer;
  if (number < -2147483648 || number > 2147483648) {
    answer = 0;
  } else if (x < 0) {
    answer = `-${number}`;
  } else {
    answer = number;
  }

  return answer;
};
