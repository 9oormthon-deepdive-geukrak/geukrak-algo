// 크루스칼
function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent, parent[x]));
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function isCycle(parent, a, b) {
  return find(parent, a) === find(parent, b);
}

function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  let totalCost = 0;

  edges.forEach(([node1, node2, cost]) => {
    if (!isCycle(parent, node1, node2)) {
      union(parent, node1, node2);
      totalCost += cost;
    }
  });

  return totalCost;
}

function solution(n, costs) {
  return kruskal(n, costs);
}

// 프림 알고리즘
// function getGraph(n, costs) {
//     const graph = Array.from({ length: n }, () => []);

//     costs.forEach(([src, dst, cost]) => {
//         graph[src].push({ node: dst, cost });
//         graph[dst].push({ node: src, cost });
//     });

//     return graph;
// }

// function prim(n, start, graph) {
//     const visited = Array(n).fill(false);
//     let totalCost = 0;
//     const stack = [{ node: start, cost: 0 }];

//     while (stack.length > 0) {
//         stack.sort((a, b) => b.cost - a.cost);
//         const { node: src, cost: srcCost } = stack.pop();

//         if (visited[src]) continue;
//         visited[src] = true;
//         totalCost += currentCost;

//         for (const { node: dst, cost } of graph[src]) {
//             if (!visited[dst]) {
//                 stack.push({ node: dst, cost });
//             }
//         }
//     }

//     return totalCost;
// }

// function solution(n, costs) {
//     const graph = getGraph(n, costs);
//     return prim(n, 0, graph);
// }

// 다익스트라 변형
// function getGraph(n, costs) {
//   const graph = Array.from({ length: n }, () => []);

//   costs.forEach(([src, dst, cost]) => {
//     graph[src].push({ node: dst, cost });
//     graph[dst].push({ node: src, cost });
//   });

//   return graph;
// }

// function dijkstra(n, start, graph) {
//   const distance = Array(n).fill(Infinity);
//   const visited = Array(n).fill(false);
//   distance[start] = 0;

//   const stack = [{ node: start, cost: 0 }];
//   while (stack.length > 0) {
//     stack.sort((a, b) => b.cost - a.cost);
//     const { node: src, cost: srcCost } = stack.pop();

//     if (visited[src]) continue;
//     visited[src] = true;

//     for (const { node: dst, cost } of graph[src]) {
//       if (!visited[dst] && distance[dst] > cost) {
//         distance[dst] = cost;
//         stack.push({ node: dst, cost: cost });
//       }
//     }
//   }

//   return distance;
// }

// function solution(n, costs) {
//   const graph = getGraph(n, costs);

//   return Math.min(...[...Array(n).keys()].map((node) => dijkstra(n, node, graph).reduce((a, b) => a + b, 0)));
// }
