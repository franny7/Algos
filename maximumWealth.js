/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/
/*
accounts = [[1,2,3],[3,2,1]]
var maximumWealth = function(accounts) {
    var account1 = accounts[0];
    console.log(newAcc);
}
*/
/*
Steps:
1 - iterate through array 
2 - get total sum of each account
3 - compare the total of the accounts
4 - return the higher amount
*/


// Solution 1

var maximumWealth = function(accounts) {
  // set variable to be able to find a starting place within the accounts array, also split up the array into two different acocunts
      let accountOne = accounts[0];
      let accountTwo = accounts[1];
  // created sum function to be able to iterate/sum up the values in each array
      let sum = (accumulator, currentValue) => accumulator + currentValue;
  // used the sum func to sum up each array and set them to variables to make it easier to compare them below
      let sumOne = accountOne.reduce(sum);
      let sumTwo = accountTwo.reduce(sum);
  // compared the two summed up arrays to see which one is higher so we can return it
      if(sumOne === sumTwo) {
        return sumOne;
        // 
      } else if (sumOne > sumTwo) {
        return sumOne;
        //
      } else {
        return sumTwo;
      }
  };
  accounts = [[1,2,3],[3,2,1,2]]
  maximumWealth(accounts);



  // Solution 2
  var maximumWealth = function(accounts) {
    if(accounts.length < 1) return 0;
  //create new variable and set to zero to use for comparison
      let sum = 0;
  //for each item in the array accounts, use reduce method to sum up each of the inner arrays
  //assign the sums to totals variable 
      accounts.forEach((item) => {
        let total = item.reduce((acc, curr) => acc + curr, 0);  
        //if our total is greater than our sum, reassign sum to out total.
        if(total > sum) {
          sum = total;
        }    
      }) 
      return sum;
  };
  accounts = []
  maximumWealth(accounts)
  // ok i fully get it now.
  // so after the first iteration it is automatically reassigning sum to a new value and as it keeps iterating it is going to take the highest value since the if statement is saying so. got it. nice.
  // an empty array will simply return 0 since th efirst if statement says so
