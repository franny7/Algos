// https://leetcode.com/problems/reverse-integer/

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
  // 1. turn number into string and split them into their own index turning it into an array
  let string = x.toString().split('');
  // 2. check if the number is negative than remove the dash
  if (string[0] === '-') {
    string.splice(0, 1);
  }

  // 3. reverse our array (string) and join the indices to turn into a number again
  let number = string.reverse().join('');
  // 4. create answer variable
  let answer;
  // 5. check if number is greater than 32 bit, if so answer = 0. if x is a negative number, throw a dash in front of the new reversed number. else just set the answer = number.
  if (number < -2147483648 || number > 2147483648) {
    answer = 0;
  } else if (x < 0) {
    answer = `-${number}`;
  } else {
    answer = number;
  }

  // 6. return answer
  return answer;
};
