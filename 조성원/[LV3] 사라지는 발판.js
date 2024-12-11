const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function isValidMove(board, x, y) {
  return (
    x >= 0 &&
    x < board.length &&
    y >= 0 &&
    y < board[0].length &&
    board[x][y] === 1
  );
}

function hasValidMoves(board, x, y) {
  return DIRECTIONS.some(([dx, dy]) => isValidMove(board, x + dx, y + dy));
}

function backtrack(board, aloc, bloc, turn, moveCount) {
  const [currentX, currentY] = turn === "a" ? aloc : bloc;

  if (board[currentX][currentY] === 0) return [false, moveCount];

  if (
    aloc[0] === bloc[0] &&
    aloc[1] === bloc[1] &&
    !hasValidMoves(board, currentX, currentY)
  )
    return [false, moveCount];

  let canWin = false;
  let minMovesToWin = Number.POSITIVE_INFINITY;
  let maxMovesToLose = 0;
  let hasValidMove = false;

  for (const [dx, dy] of DIRECTIONS) {
    const nextX = currentX + dx;
    const nextY = currentY + dy;

    if (!isValidMove(board, nextX, nextY)) continue;

    hasValidMove = true;
    board[currentX][currentY] = 0;

    const [opponentWins, totalMoves] = backtrack(
      board,
      turn === "a" ? [nextX, nextY] : aloc,
      turn === "a" ? bloc : [nextX, nextY],
      turn === "a" ? "b" : "a",
      moveCount + 1
    );

    board[currentX][currentY] = 1;

    if (!opponentWins) {
      canWin = true;
      minMovesToWin = Math.min(minMovesToWin, totalMoves);
    } else {
      maxMovesToLose = Math.max(maxMovesToLose, totalMoves);
    }
  }

  if (!hasValidMove) return [false, moveCount];

  return [canWin, canWin ? minMovesToWin : maxMovesToLose];
}

function solution(board, aloc, bloc) {
  return backtrack(board, aloc, bloc, "a", 0)[1];
}
