function solution(n, costs) {
  const find = (x) => {
    if (cycleTable[x] === x) return x;
    cycleTable[x] = find(cycleTable[x]);
    return cycleTable[x];
  };

  const union = (rootA, rootB) => {
    if (rootA < rootB) cycleTable[rootB] = rootA;
    else cycleTable[rootA] = rootB;
  };

  let answer = 0;

  costs.sort((a, b) => a[2] - b[2]);

  const cycleTable = Array.from({ length: n }, (_, i) => i);

  for (const [a, b, cost] of costs) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
      union(rootA, rootB);
      answer += cost;
    }
  }

  return answer;
}
