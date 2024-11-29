function isAvailable(cols, row, col) {
  for (let i = 0; i < row; i++)
    if (cols[i] === col || Math.abs(cols[i] - col) === row - i) return false;

  return true;
}

function placeQueens(n, row, cols) {
  if (row === n) return 1;

  let count = 0;
  for (let col = 0; col < n; col++) {
    if (!isAvailable(cols, row, col)) continue;
    cols[row] = col;
    count += placeQueens(n, row + 1, cols);
    cols[row] = -1;
  }
  return count;
}

function solution(n) {
  const cols = Array(n).fill(-1);
  return placeQueens(n, 0, cols);
}
