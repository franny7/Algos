// https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/

/*
There are n employees, each with a unique id from 0 to n - 1.

You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:

idi is the id of the employee that worked on the ith task, and
leaveTimei is the time at which the employee finished the ith task. All the values leaveTimei are unique.
Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.

Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.

Example 1:
Input: n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
Output: 1
Explanation: 
Task 0 started at 0 and ended at 3 with 3 units of times.
Task 1 started at 3 and ended at 5 with 2 units of times.
Task 2 started at 5 and ended at 9 with 4 units of times.
Task 3 started at 9 and ended at 15 with 6 units of times.
The task with the longest time is task 3 and the employee with id 1 is the one that worked on it, so we return 1.

Example 2:
Input: n = 26, logs = [[1,1],[3,7],[2,12],[7,17]]
Output: 3
Explanation: 
Task 0 started at 0 and ended at 1 with 1 unit of times.
Task 1 started at 1 and ended at 7 with 6 units of times.
Task 2 started at 7 and ended at 12 with 5 units of times.
Task 3 started at 12 and ended at 17 with 5 units of times.
The tasks with the longest time is task 1. The employees that worked on it is 3, so we return 3.

Example 3:
Input: n = 2, logs = [[0,10],[1,20]]
Output: 0
Explanation: 
Task 0 started at 0 and ended at 10 with 10 units of times.
Task 1 started at 10 and ended at 20 with 10 units of times.
The tasks with the longest time are tasks 0 and 1. The employees that worked on them are 0 and 1, so we return the smallest id 0.

Constraints:
2 <= n <= 500
1 <= logs.length <= 500
logs[i].length == 2
0 <= idi <= n - 1
1 <= leaveTimei <= 500
idi != idi+1
leaveTimei are sorted in a strictly increasing order.
*/

/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  // time var and employee variable starting with the first jump from zero time to the time it shows in the first index of logs array
  let time = logs[0][1];
  let employee = logs[0][0];

  // compare the time jump and if larger than the current time than save new time and employee
  for (let i = 1; i < logs.length; i++) {
    if (time < logs[i][1] - logs[i - 1][1]) {
      time = logs[i][1] - logs[i - 1][1];
      employee = logs[i][0];
    }

    // if times are equal set employee equal to the smaller id number
    if (time === logs[i][1] - logs[i - 1][1]) {
      employee = Math.min(employee, logs[i][0]);
    }
  }
  // return the final saved employee
  return employee;
};

/*
create a variable to track the time starting with the first index
create variable to track the emp starting at the first index
loop through logs starting at the 1 index and compare it to the previous index to find if the time is larger than the current saved time
if so save new time and the employee id
next check if the current saved time is equal to the new one and if so return the one that has a smaller employee id
*/
