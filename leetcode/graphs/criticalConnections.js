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

// check outco/outcomes Github repo for explanation on this one

var criticalConnections = function (n, connections) {
  const graph = {};

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let edge of connections) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  let count = 1;
  const tag = new Array(n).fill(0);
  const low = new Array(n);
  const result = [];

  const dfs = (current, parent) => {
    if (tag[current] > 0) {
      return;
    }

    tag[current] = count;
    low[current] = count;

    count++;

    let edges = graph[current];

    for (let edge of edges) {
      if (edge !== parent) {
        dfs(edge, current);

        if (low[edge] < low[current]) {
          low[current] = low[edge];
        }

        if (low[edge] > tag[current]) {
          result.push([current, edge]);
        }
      }
    }
  };

  dfs(0, null);

  return result;
};
