// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 
Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 
Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/

/*
  @param {string} s
  @return {number}
 */
var firstUniqChar = function (s) {
  //  1. create map variable
  let map = {};

  //  2. iterate through string with map and set it to 1, if the letter occurs again then add one to it
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else if (map[s[i]]) {
      map[s[i]] += 1;
    }
  }

  //  3. loop through map object using a for of loop with the entries we used and refering to our keys/values
  for (let [key, value] of Object.entries(map)) {
    //  4. if the value of our key is equal to 1, return the index of that key from our string
    if (value === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

////// Completed in 18 minutes!!!
