function solution(keyinput, [width, height]) {
  const [MAX_X, MAX_Y] = [Math.floor(width / 2), Math.floor(height / 2)];
  const startPosition = [0, 0];

  const move = {
    up: ([x, y]) => [x, Math.min(y + 1, MAX_Y)],
    down: ([x, y]) => [x, Math.max(y - 1, -MAX_Y)],
    left: ([x, y]) => [Math.max(x - 1, -MAX_X), y],
    right: ([x, y]) => [Math.min(x + 1, MAX_X), y],
  };

  return keyinput.reduce((position, key) => move[key](position), startPosition);
}
