// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/

/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 
Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

// used a check function seperately for easier readability and cleaner code below
function check(char) {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}

var maxVowels = function (s, k) {
  let c = 0;
  let maxCount = 0;

  for (let i = 0; i < k; i++) {
    if (check(s[i])) {
      c++;
    }
  }
  maxCount = Math.max(maxCount, c);

  for (let i = k; i < s.length; i++) {
    if (check(s[i - k])) {
      c--;
    }
    if (check(s[i])) {
      c++;
    }
    maxCount = Math.max(maxCount, c);
  }
  return maxCount;
};
