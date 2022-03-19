// https://leetcode.com/problems/integer-to-roman/

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
1 <= num <= 3999
*/

/*
  @param {number} num
  @return {string}
 */
var intToRoman = function (num) {
  // init result as a string
  let result = '';

  // while the number is not equal to 0, check each if statement and depending on which if block runs, subtract that total number from the number and add the string attached to it.
  while (num !== 0) {
    if (num >= 1000) {
      result += 'M';
      num -= 1000;
    } else if (num >= 900) {
      result += 'CM';
      num -= 900;
    } else if (num >= 500) {
      result += 'D';
      num -= 500;
    } else if (num >= 400) {
      result += 'CD';
      num -= 400;
    } else if (num >= 100) {
      result += 'C';
      num -= 100;
    } else if (num >= 90) {
      result += 'XC';
      num -= 90;
    } else if (num >= 50) {
      result += 'L';
      num -= 50;
    } else if (num >= 40) {
      result += 'XL';
      num -= 40;
    } else if (num >= 10) {
      result += 'X';
      num -= 10;
    } else if (num >= 9) {
      result += 'IX';
      num -= 9;
    } else if (num >= 5) {
      result += 'V';
      num -= 5;
    } else if (num >= 4) {
      result += 'IV';
      num -= 4;
    } else {
      result += 'I';
      num -= 1;
    }
  }

  // Once the number is equal to 0 the while loop will break and return result
  return result;
};
