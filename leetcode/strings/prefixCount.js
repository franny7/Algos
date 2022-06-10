// https://leetcode.com/problems/counting-words-with-a-given-prefix/

/*
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.


Example 1:
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

Example 2:
Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
 
Constraints:
1 <= words.length <= 100
1 <= words[i].length, pref.length <= 100
words[i] and pref consist of lowercase English letters.
*/

/*
  @param {string[]} words
  @param {string} pref
  @return {number}
 */
var prefixCount = function (words, pref) {
  // create count to be returned
  let count = 0;

  // with each iteration, slice the prefix of the current word in words array and compare it to prefix, if they match increment count.
  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];
    let currWordPref = currWord.slice(0, pref.length);

    if (currWordPref === pref) {
      count++;
    }
  }
  // return count
  return count;
};

// TOO SIMPLE SOLUTION BELOW
// var prefixCount = function(words, pref) {
//   let count = 0;

//   for(let i = 0; i < words.length; i++){
//     if(words[i].startsWith(pref)){
//       count++;
//     }
//   }
//   return count;
// };
