// https://leetcode.com/problems/interval-list-intersections/

/*
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].


Example 1:
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Example 2:
Input: firstList = [[1,3],[5,9]], secondList = []
Output: []
 
Constraints:
0 <= firstList.length, secondList.length <= 1000
firstList.length + secondList.length >= 1
0 <= starti < endi <= 109
endi < starti+1
0 <= startj < endj <= 109
endj < startj+1
*/

/*
  @param {number[][]} firstList
  @param {number[][]} secondList
  @return {number[][]}
 */

// recursive function to compare each element in both lists
const compare = (i, j, firstList, secondList, result) => {
  // if either of the first two ifs are true it means there was no overlap with the given indices of i and j
  if (firstList[i][1] < secondList[j][0]) {
    return;
  } else if (secondList[j][1] < firstList[i][0]) {
    return;
  } else {
    // below we are finding the overlap by grabbing the max of first or second list at the 0th index of the i index or j index and same with the min of the first or second list at the 1 index of the i index or j index
    let overlap = [
      Math.max(firstList[i][0], secondList[j][0]),
      Math.min(firstList[i][1], secondList[j][1]),
    ];

    // push the above overlap to our result
    result.push(overlap);
  }
};

var intervalIntersection = function (firstList, secondList) {
  // initiate result variable
  const result = [];

  // initiate our two pointers
  let i = 0;
  let j = 0;

  // loop through the lists as long as they aren't the length of either array, call our recursive function.
  while (i < firstList.length && j < secondList.length) {
    compare(i, j, firstList, secondList, result);

    // we will use this if else statement to keep our i and j pointers close by incrementing our i or j pointers depending on the values of the conditional statements
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else if (firstList[i][1] > secondList[j][1]) {
      j++;
    } else {
      i++;
      j++;
    }
  }

  // return result
  return result;
};
