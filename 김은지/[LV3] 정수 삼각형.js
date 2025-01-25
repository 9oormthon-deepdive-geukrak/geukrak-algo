function solution(triangle) {
  for (let row = triangle.length - 2; row >= 0; row--) {
    triangle[row] = triangle[row].map(
      (value, col) =>
        value +
        (triangle[row + 1][col] > triangle[row + 1][col + 1] ? triangle[row + 1][col] : triangle[row + 1][col + 1]) // Math.max(triangle[row + 1][col], triangle[row + 1][col + 1])
    );
  }
  return triangle[0][0];
}
