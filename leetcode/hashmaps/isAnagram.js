// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/*
  @param {string} s
  @param {string} t
  @return {boolean}
 */

// Regular Solution. Down below is the mapping solution.

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sortedS = s.split('').sort().join('');
//   let sortedT = t.split('').sort().join('');

//   if (sortedS === sortedT) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Hashmap solution here!

var isAnagram = function (s, t) {
  // 1. create variables for length of s and t because we will refer to them multiple times
  let lengthS = s.length;
  let lengthT = t.length;
  // 2. create an empty object
  let map = {};

  // 3. base case
  if (lengthS !== lengthT) {
    return false;
  }

  // 4. loop though first string (s) and check if key already exists, if it d/n exist yet, add it to our object and set it equal to zero. if it does or d/n exist either way increment the value each iteration
  for (let i = 0; i < lengthS; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
  }

  // 5. loop through the second string (t) if any of the elements dont exist in our map that we already created, return false. If it does alreadt exist, decrement it
  for (let j = 0; j < lengthT; j++) {
    if (!map[t[j]]) {
      return false;
    }
    map[t[j]]--;
  }

  // return true by defauly but if any of our cases above don't pass, it will return false instead
  return true;
};

/////// This is the most optimal solution!
