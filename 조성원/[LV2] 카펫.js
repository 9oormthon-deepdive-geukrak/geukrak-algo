function solution(brown, yellow) {
  const total = brown + yellow;

  for (let h = 3; h <= Math.sqrt(total); h++) {
    if (total % h === 0) {
      const w = total / h;
      if (w >= h && w * 2 + (h - 2) * 2 === brown) return [w, h];
    }
  }
}
