function dfs(start, n, computers, visited) {
  let visited_copy = visited.slice();

  visited_copy[start] = true;
  for (let i = 0; i < n; i++)
    if (computers[start][i] === 1 && !visited_copy[i])
      visited_copy = dfs(i, n, computers, visited_copy);

  return visited_copy;
}

function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited = dfs(i, n, computers, visited);
      answer++;
    }
  }

  return answer;
}
