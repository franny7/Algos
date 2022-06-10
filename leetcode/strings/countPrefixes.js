// https://leetcode.com/problems/count-prefixes-of-a-given-string/

/*
You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.


Example 1:
Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
Explanation:
The strings in words which are a prefix of s = "abc" are:
"a", "ab", and "abc".
Thus the number of strings in words which are a prefix of s is 3.

Example 2:
Input: words = ["a","a"], s = "aa"
Output: 2
Explanation:
Both of the strings are a prefix of s. 
Note that the same string can occur multiple times in words, and it should be counted each time.
 

Constraints:
1 <= words.length <= 1000
1 <= words[i].length, s.length <= 10
words[i] and s consist of lowercase English letters only.
*/

/*
  @param {string[]} words
  @param {string} s
  @return {number}
 */
var countPrefixes = function (words, s) {
  // create count var
  let count = 0;

  // loop through words. if current word is equal to s sliced to the size of current word, increment count
  for (let i = 0; i < words.length; i++) {
    if (words[i] === s.slice(0, words[i].length)) {
      count++;
    }
  }
  // return count
  return count;
};
