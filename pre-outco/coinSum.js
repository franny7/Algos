// COIN SUM
// Given an array of coins anf a target total, return how many unique ways there are to use the coins to make up that total.

/*
 * Complete the 'coinSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY coins
 *  2. INTEGER total
 */

/*

INPUT: coinArr{int[]}, target{int}
OUTPUT: {int}

INPUT: [1,2,4], 5
OUTPUT: 4

Recursive case\-pop last coin from arr
-subtract last coin from target

BASE CASES
-if target is negative, retunr 0
-no more coins and target is positive, return 0
-no more coins, target si zero, return 1


*/
function coinSumCache(coins, total) {
  // step 1 create cache
  let cache = {};

  function coinSum(coinArr, target) {
    // step 2 cache
    let key = coinArr.length + '_' + target;
    if (cache[key]) return cache[key];
    // BASE CASES
    if (target < 0) {
      return 0;
    }
    if (coinArr.length === 0) {
      if (target > 0) {
        return 0;
      }
      return 1;
    }

    // left recursive func
    let popped = coinArr.pop();
    let left = coinSum(coinArr, target);
    coinArr.push(popped);

    // right recursive func
    let right = coinSum(coinArr, target - coinArr[coinArr.length - 1]);

    // store in cache
    cache[key] = right + left;
    // retunr recursive cases
    return right + left;
  }
  return coinSum(coins, total);
}

console.log(coinSumCache([1, 2, 4], 5));
