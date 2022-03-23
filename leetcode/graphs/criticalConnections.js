// https://leetcode.com/problems/critical-connections-in-a-network/submissions/

/*
There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

Return all critical connections in the network in any order.


Example 1:
Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.

Example 2:
Input: n = 2, connections = [[0,1]]
Output: [[0,1]]
 

Constraints:
2 <= n <= 105
n - 1 <= connections.length <= 105
0 <= ai, bi <= n - 1
ai != bi
There are no repeated connections.
*/

/*
  @param {number} n
  @param {number[][]} connections
  @return {number[][]}
 */

var criticalConnections = function (n, connections) {
  // initiate graph
  const graph = {};

  // create n nodes and give them each an array
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  // create connections showing the nodes that each node connects to
  for (let edge of connections) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  // initiate count which will increment on each iteration so that each node can have a different tag, they will all also have a different low to begin with but as we find cycle regions we will adjust the nodes in a cycle to have the same low. Also initiate result array
  let count = 1;
  const tag = new Array(n).fill(0);
  const low = new Array(n);
  const result = [];

  // create recursive dfs function whcih will take in the current node and its parent
  const dfs = (current, parent) => {
    // if the tag of the current nodes tag is greater than 0 that means it has already been visited so end recursion and return
    if (tag[current] > 0) {
      return;
    }

    // at first we will set the current nodes tag and low equal to the count, increment the count after each node so that they will each have a different tag/low
    tag[current] = count;
    low[current] = count;

    count++;

    // initiate edges variable which will give us the nodes that the current node connects to
    let edges = graph[current];

    // loop through the edges of each node, as long as the edge is not going back on its parent node, call dfs passing in the current edge and current node
    for (let edge of edges) {
      if (edge !== parent) {
        dfs(edge, current);

        // if low of the edge is less than the low of current node, set the low of the current equal to the low of the edge meaning they are a part of the same cycle
        if (low[edge] < low[current]) {
          low[current] = low[edge];
        }

        // if the low of the edge is greater than the tag of the current that means we have a critical connection, push the current and edge into our result array
        if (low[edge] > tag[current]) {
          result.push([current, edge]);
        }
      }
    }
  };

  // call recursive function starting at the first node '0' and its parent node which is null by default because the first node wont have a parent
  dfs(0, null);

  // return result
  return result;
};

/* check outco/outcomes Github, link: 
https://github.com/OutcoSF/outcomes/blob/master/Tech_Level_Up/2022.02.04%20-%20Tarjan's%20Critical%20Connections/PROMPT.md
*/
