const DIRECTION = [
  [1, 0, 0],
  [0, 1, 1],
  [-1, 0, 0],
  [0, -1, 1],
];

function outOfRange({ row, col, maxRow, maxCol }) {
  return row < 0 || col < 0 || row >= maxRow || col >= maxCol;
}

function isWall(status) {
  return status === 1;
}

function isCorner(prevDirection, currDirection) {
  return prevDirection !== currDirection;
}

function dijsktra(maps, start, end) {
  const maxRow = maps.length;
  const maxCol = maps[0].length;

  const distance = Array.from({ length: maxRow }, () => Array.from({ length: maxCol }, () => Array(2).fill(Infinity)));

  distance[start[0]][start[1]][0] = 0;
  distance[start[0]][start[1]][1] = 0;
  const pq = [
    [...start, 0],
    [...start, 1],
  ];

  while (pq.length > 0) {
    pq.sort((a, b) => b[2] - a[2]);
    const [r, c, cost, direction] = pq.pop();

    if (distance[r][c][direction] > cost) continue;
    if (r === end[0] && c === end[1]) return distance[r][c][direction];

    for (const [dr, dc, dd] of DIRECTION) {
      const [nr, nc] = [r + dr, c + dc];
      if (outOfRange({ row: nr, col: nc, maxRow, maxCol }) || isWall(maps[nr][nc])) continue;
      const nCost = isCorner(direction, dd) ? distance[r][c][direction] + 600 : distance[r][c][direction] + 100;

      if (distance[nr][nc][dd] > nCost) {
        distance[nr][nc][dd] = nCost;
        pq.push([nr, nc, nCost, dd]);
      }
    }
  }

  return -1;
}

function solution(maps) {
  return dijsktra(maps, [0, 0, 0], [maps.length - 1, maps[0].length - 1]);
}
