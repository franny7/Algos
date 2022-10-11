// https://leetcode.com/problems/goat-latin/

/*
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
For example, the word "apple" becomes "applema".
If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
Return the final sentence representing the conversion from sentence to Goat Latin.


Example 1:
Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:
Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

Constraints:
1 <= sentence.length <= 150
sentence consists of English letters and spaces.
sentence has no leading or trailing spaces.
All the words in sentence are separated by a single space.
*/

/*
  @param {string} sentence
  @return {string}
*/
const transform = (word, index) => {
  let result = [];
  let vowels = 'aeiouAEIOU';

  // will use this to check the first letter of each word if it's a consonant or vowel
  let firstChar = word[0];

  if (vowels.indexOf(firstChar) === -1) {
    // this would be a consonant
    for (let i = 1; i < word.length; i++) {
      result.push(word[i]);
    }

    result.push(word[0]);
  } else {
    // this would be a vowel
    result.push(word);
  }

  // add on 'ma' to end of string
  result.push('ma');

  // add on 'a' to the end of the string given the words place in the sentence
  result.push(new Array(index + 1).fill('a').join(''));

  return result.join('');
};

var toGoatLatin = function (sentence) {
  // split sentence to be able to disect it
  let sSplit = sentence.split(' ');

  // loop through each word in sentence using our helper function from above
  for (let i = 0; i < sSplit.length; i++) {
    sSplit[i] = transform(sSplit[i], i);
  }

  // use join method to turn the sentence from an array to a sentence since that's what the problem is asking for
  return sSplit.join(' ');
};
