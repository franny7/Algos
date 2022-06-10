// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

/*
Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

A prefix of a string s is any leading contiguous substring of s.

Example 1:
Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

Example 2:
Input: sentence = "this problem is an easy problem", searchWord = "pro"
Output: 2
Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

Example 3:
Input: sentence = "i am tired", searchWord = "you"
Output: -1
Explanation: "you" is not a prefix of any word in the sentence.
 

Constraints:
1 <= sentence.length <= 100
1 <= searchWord.length <= 10
sentence consists of lowercase English letters and spaces.
searchWord consists of lowercase English letters.
*/

/*
  @param {string} sentence
  @param {string} searchWord
  @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  // give each word its own index
  let arr = sentence.split(' ');

  // loop through new array.
  for (let i = 0; i < arr.length; i++) {
    // if current words length is at least the length of searchWord, meaning it is a possible match, slice the length of our search word from our current word starting at the beginning. If they match return i + 1 since were returning the placement of the word that matches
    if (arr[i].length >= searchWord.length) {
      let wordPrefix = arr[i].slice(0, searchWord.length);
      if (wordPrefix === searchWord) {
        return i + 1;
      }
    }
  }
  // if no words were found with matching prefix, return -1
  return -1;
};
