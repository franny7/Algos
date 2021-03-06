// https://leetcode.com/problems/simplify-path/

/*
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.

 
Example 1:
Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Example 2:
Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

Example 3:
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
 

Constraints:
1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or '_'.
path is a valid absolute Unix path.
*/

/*
  @param {string} path
  @return {string}
 */
var simplifyPath = function (path) {
  // split the path into seperate indixes of in an array (.split returns an array)
  path = path.split('/');

  // initiate an array
  let raw = [];

  // loop through the array, if the item (index) is not a '' or a '.', push the element into raw array
  for (let item of path) {
    if (item !== '' && item !== '.') {
      raw.push(item);
    }
  }

  // initiate result array and count variable
  let result = [];
  let count = 0;

  // loop backward through raw, if index[i] is equal to '..', increment count. else if count is already greater than 0, decrement count. else if count is equal to 0, push raw[i] to result array
  for (let i = raw.length - 1; i > -1; i--) {
    if (raw[i] === '..') {
      count++;
    } else if (count > 0) {
      count--;
    } else if (count === 0) {
      result.push(raw[i]);
    }
  }

  // reverse what was pushed into result in the last step, then join the indices with a slash seperating them, then add a / at the beginning of the path because that's how paths are
  result = result.reverse();
  result = result.join('/');
  result = '/' + result;

  // return the result
  return result;
};
