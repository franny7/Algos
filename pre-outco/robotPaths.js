// Matrix practice

/* 
Given a matrix of zeroes, determine how many unique paths exist from the top left corner to the bottom right corner.

Input: An array of an array of integers (matrix)
Output: Integer

Example 1:
 Input:  
 [[ 0, 0, 0, 0],
  [ 0, 0, 0, 0],
  [ 0, 0, 0, 0]]
 Output: 38

 Example 2:
 Input:  
 [[ 0, 0, 0],
  [ 0, 0, 0]]
 Output: 4

 Example 3:
 Input:  
 [[ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0]]
 Output: 7110272

Notes: From any point, you can travel in the four cardinal directions (north, south, west, east). A path is valid as long as it travels from the top left ot the bottom right corner, does not go off the matrix, and does not travel back on itself. Think of this as a graph traversal problem where you note the nodes you've visited in some way.

*/

/*
 * Complete the 'robotPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function robotPaths(matrix) {
  let count = 0;
  let maxRow = matrix.length - 1;
  let maxCol = matrix[0].length - 1;
  // left, right, up, down
  let dirs = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  function traverse(row, col) {
    // base cases
    // 1. out of bounds
    if (row > maxRow || row < 0 || col > maxCol || col < 0) {
      return;
    }
    // 2. visited
    if (matrix[row][col] === 1) {
      return;
    }
    // 3. destination reached
    if (row == maxRow && col === maxCol) {
      count++;
      return;
    }
    // add to visited
    matrix[row][col] = 1;
    // traverse in all dir
    for (let dir of dirs) {
      traverse(row + dir[0], col + dir[1]);
    }
    // backtrack: unmark visited
    matrix[row][col] = 0;
  }
  traverse(0, 0);
  return count;
}
