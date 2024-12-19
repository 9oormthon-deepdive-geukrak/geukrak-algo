function getEdges(land, height) {
  const n = land.length;
  const edges = [];

  const nodeId = (r, c) => r * n + c; // 1차원 배열용

  for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
          // 오른쪽 방향 간선
          if (c < n - 1) {
              let cost = Math.abs(land[r][c] - land[r][c + 1]);
              if (cost <= height) cost = 0;
              edges.push([cost, nodeId(r, c), nodeId(r, c + 1)]);
          }
          
          // 아래 방향 간선
          if (r < n - 1) {
              let cost = Math.abs(land[r][c] - land[r + 1][c]);
              if (cost <= height) cost = 0;
              edges.push([cost, nodeId(r, c), nodeId(r + 1, c)]);
          }
      }
  }

  edges.sort((a, b) => a[0] - b[0]);
  return edges;
}

function find(parent, x) {
  return parent[x] === x ? x : (parent[x] = find(parent, parent[x]));
}

function union(parent, a, b) {
  rootA = find(parent, a);
  rootB = find(parent, b);
  
  if (rootA === rootB) return false;
  
  if (rootA < rootB) {
      parent[rootB] = rootA;
  } else {
      parent[rootA] = rootB;
  }
  
  return true;
}

function solution(land, height) {
  const n = land.length;
  const edges = getEdges(land, height);

  const parent = Array.from({length: n * n}, (_, i) => i);

  let totalCost = 0;
  for (const [cost, a, b] of edges) {
      if (union(parent, a, b)) {
          totalCost += cost;
      }
  }

  return totalCost;
}
