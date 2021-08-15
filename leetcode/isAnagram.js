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
  let lengthS = s.length;
  let lengthT = t.length;
  let map = {};

  if (lengthS !== lengthT) {
    return false;
  }

  for (var i = 0; i < lengthS; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
  }

  for (var j = 0; j < lengthT; j++) {
    if (!map[t[j]]) {
      return false;
    }
    map[t[j]]--;
  }

  return true;
};
