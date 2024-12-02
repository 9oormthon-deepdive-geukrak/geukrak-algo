function isExcludedWire(current, next, exclude) {
  return (
    (current === exclude[0] && next === exclude[1]) ||
    (current === exclude[1] && next === exclude[0])
  );
}

function dfs(graph, current, visited, exclude) {
  visited[current] = true;
  let count = 1;

  for (const next of graph[current])
    if (!visited[next] && !isExcludedWire(current, next, exclude))
      count += dfs(graph, next, visited, exclude);

  return count;
}

function buildGraph(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function solution(n, wires) {
  const graph = buildGraph(n, wires);
  let answer = Number.POSITIVE_INFINITY;
  const visited = new Array(n + 1);

  for (const wire of wires) {
    visited.fill(false);
    const count1 = dfs(graph, wire[0], visited, wire);
    const count2 = n - count1;
    answer = Math.min(answer, Math.abs(count1 - count2));
  }

  return answer;
}
