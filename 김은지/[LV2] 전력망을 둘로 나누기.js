function getDividedNetwork(wires, removeWireId) {
  const newWires = wires.slice();
  newWires.splice(removeWireId, 1);
  return newWires;
}

function getGraph(n, linked) {
  const graph = Array.from({ length: n + 1 }, () => []);
  linked.forEach(([src, dst]) => {
    graph[src].push(dst);
    graph[dst].push(src);
  });
  return graph;
}

function dfs(n, graph) {
  const visited = Array.from({ length: n + 1 }, () => false);
  visited[1] = true;
  const stack = [1];

  let cnt = 0;
  while (stack.length > 0) {
    const src = stack.pop();
    cnt++;

    for (const dst of graph[src]) {
      if (visited[dst]) continue;
      stack.push(dst);
      visited[dst] = true;
    }
  }
  return cnt;
}

function solution(n, wires) {
  let minDiff = Number.POSITIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    minDiff = Math.min(minDiff, Math.abs(n - 2 * dfs(n, getGraph(n, getDividedNetwork(wires, i)))));
  }
  return minDiff;
}
