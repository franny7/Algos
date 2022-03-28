// https://leetcode.com/problems/decode-ways/

/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

 
Example 1:
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
 
Constraints:
1 <= s.length <= 100
s contains only digits and may contain leading zero(s).
*/

/*
  @param {string} s
  @return {number}
 */

// used memoization to prevent timing out, used a cache for that. Steps to using a cache are below

// create cache
// check cache
// write cache

var numDecodings = function (s) {
  // create our library of valid number (1-26)
  const lib = new Set();
  const cache = {};

  // loop through starting at 1 to get our numbers 1-26 in strings
  for (let i = 1; i < 27; i++) {
    lib.add(JSON.stringify(i));
  }

  // recursive function
  const findValid = (index) => {
    if (index in cache) {
      return cache[index];
    }

    // base cases, checking if the index is equal to or greater than the s.length and we return either 1 or 0
    if (index === s.length) {
      return 1;
    }
    if (index > s.length) {
      return 0;
    }

    // create possible1 & 2 variables to be able to slice the string and not reuse the same indices in the next iterations
    let possible1 = s.slice(index, index + 1);
    let possible2 = s.slice(index, index + 2);

    // create a current variable to store any valid values using the if statements below
    let current = 0;

    if (lib.has(possible1)) {
      current += findValid(index + 1);
    }
    if (lib.has(possible2)) {
      current += findValid(index + 2);
    }

    cache[index] = current;
    return current;
  };

  // initialize the recursive function starting at the 0th index
  return findValid(0);
};
