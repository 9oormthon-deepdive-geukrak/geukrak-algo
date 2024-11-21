const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const isRange = (x, y, n) => x >= 0 && x < n && y >= 0 && y < n;
const isRoad = (x, y, board) => board[x][y] === 0;

function solution(board) {
  const n = board.length;

  const queue = [[0, 0, 0, -1]];
  const costs = Array.from({ length: n }, () =>
    Array(n).fill(Number.POSITIVE_INFINITY)
  );

  while (queue.length) {
    const [x, y, cost, dir] = queue.shift();

    if (costs[x][y] + 500 <= cost) continue;

    costs[x][y] = Math.min(costs[x][y], cost);

    for (const [i, [dx, dy]] of DIRECTIONS.entries()) {
      const nx = x + dx;
      const ny = y + dy;

      if (isRange(nx, ny, n) && isRoad(nx, ny, board)) {
        const newCost = cost + (dir === i || dir === -1 ? 100 : 600);
        queue.push([nx, ny, newCost, i]);
      }
    }
  }

  return costs[n - 1][n - 1];
}
