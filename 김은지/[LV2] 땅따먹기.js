function solution(land) {
  return Math.max(
    ...land.reduce((accRow, currRow) =>
      currRow.map((cell, i) => cell + Math.max(...accRow.slice(0, i), ...accRow.slice(i + 1)))
    )
  );
}
