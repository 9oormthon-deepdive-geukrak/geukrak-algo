function solution(brown, yellow) {
  for (let yellowX = 1; yellowX <= yellow; yellowX++) {
    const yellowY = yellow / yellowX;
    if (!Number.isInteger(yellowY)) continue;
    const brownX = yellowX + 2;
    const brownY = yellowY + 2;
    if (brownX * brownY - yellow === brown) {
      if (brownX > brownY) {
        return [brownX, brownY];
      }
      return [brownY, brownX];
    }
  }
}
