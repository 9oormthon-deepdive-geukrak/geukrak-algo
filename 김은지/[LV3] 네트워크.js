function getGraph(n, computers) {
  const graph = Array.from({ length: n }, () => []);
  computers.forEach((dsts, srcId) => {
    dsts.forEach((dst, dstId) => {
      if (dst === 1 && srcId !== dstId) graph[srcId].push(dstId);
    });
  });
  return graph;
}

function dfs(start, graph, visited) {
  const stack = [start];
  visited.add(start);

  while (stack.length > 0) {
    const src = stack.pop();

    for (const dst of graph[src]) {
      if (visited.has(dst)) continue;
      stack.push(dst);
      visited.add(dst);
    }
  }
}

function solution(n, computers) {
  const graph = getGraph(n, computers);
  const visited = new Set();

  let network = 0;
  for (let node = 0; node < n; node++) {
    if (visited.has(node)) continue;
    network++;
    dfs(node, graph, visited);
  }

  return network;
}
