const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const isRange = (x, y, n, m) => x >= 0 && x < n && y >= 0 && y < m;
const isRoad = (x, y, maps) => maps[x][y] === 1;

function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];

  const queue = [[0, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;

      if (isRange(nx, ny, n, m) && isRoad(nx, ny, maps) && !visited[nx][ny]) {
        visited[nx][ny] = true;
        maps[nx][ny] = maps[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return visited[n - 1][m - 1] ? maps[n - 1][m - 1] : -1;
}
