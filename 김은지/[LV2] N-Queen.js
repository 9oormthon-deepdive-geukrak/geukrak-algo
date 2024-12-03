function isSafe(queens, row, col) {
  for (let r = 0; r < row; r++) {
    const c = queens[r];
    if (c === col || Math.abs(c - col) === Math.abs(r - row)) {
      return false;
    }
  }
  return true;
}

function countNQueens(n, row, queens) {
  if (row === n) {
    return 1;
  }

  let count = 0;
  for (let col = 0; col < n; col++) {
    if (isSafe(queens, row, col)) {
      queens[row] = col;
      count += countNQueens(n, row + 1, queens);
      queens[row] = -1;
    }
  }
  return count;
}

function solution(n) {
  return countNQueens(n, 0, Array(n).fill(-1));
}
