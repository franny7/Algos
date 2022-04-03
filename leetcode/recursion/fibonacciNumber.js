// https://leetcode.com/problems/fibonacci-number/

/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).


Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 
Constraints:
0 <= n <= 30
*/

/*
  @param {number} n
  @return {number}
 */

// recursive solution w/ memoization
var fib = function (n) {
  // create recursive function
  let searchFib = (n) => {
    // base case, check if n is less than 2 because then we know that fibonacci 1 is just equal to 1
    if (n < 2) {
      return n;
    }
    // check if n is already in our cache, if so return the value
    if (n in cache) {
      return cache[n];
    }

    // set cache[n] equal to calling recursion on n-1 and n-2 and then return cache[n]
    cache[n] = searchFib(n - 1) + searchFib(n - 2);
    return cache[n];
  };

  // create cache and call our recursive function
  cache = {};
  return searchFib(n);
};

// recursive solution
// var fib = function(n) {
//     let result;

//     let searchFib = (index) => {
//         if(index < 2) {
//             return index;
//         } else {
//             return searchFib(index - 2) + searchFib(index - 1);
//         }

//     }

//     result = searchFib(n);
//     return result;
// };
