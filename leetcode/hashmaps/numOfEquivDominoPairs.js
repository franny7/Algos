// https://leetcode.com/problems/number-of-equivalent-domino-pairs/

/*
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
 

Example 1:
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1

Example 2:
Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3
 
Constraints:
1 <= dominoes.length <= 4 * 104
dominoes[i].length == 2
1 <= dominoes[i][j] <= 9
*/

/*
  @param {number[][]} dominoes
  @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // create result variable and a map
  let result = 0;
  const freq = {};

  // loop through array dominoes with each domino being the array at each index
  for (let domino of dominoes) {
    // sort each array within the array
    domino = domino.sort();
    // for our map, were creating these keys below and the value will be the frequency of the domino pair
    let key = `${domino[0]}_${domino[1]}`;
    if (key in freq) {
      freq[key]++;
    } else {
      freq[key] = 1;
    }
  }

  // loop through our map, check if the value per key is greater than 1. If so, add the formula below to our result
  for (let key in freq) {
    let value = freq[key];
    if (value > 1) {
      result += (value * (value - 1)) / 2;
    }
  }

  // return result
  return result;
};
