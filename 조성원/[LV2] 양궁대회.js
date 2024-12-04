function dfs(index, arrows, ryan, info, maxDiff, answer) {
  if (index === 11) {
    const newRyan = [...ryan];
    newRyan[10] += arrows;
    const diff = calculateDiff(newRyan, info);
    if (diff > maxDiff || (diff === maxDiff && check(newRyan, answer)))
      return { maxDiff: diff, answer: newRyan };
    return { maxDiff, answer };
  }

  let result = { maxDiff, answer };

  if (arrows > info[index]) {
    const newRyan = [...ryan];
    newRyan[index] = info[index] + 1;
    result = dfs(
      index + 1,
      arrows - newRyan[index],
      newRyan,
      info,
      maxDiff,
      answer
    );
  }

  return dfs(index + 1, arrows, ryan, info, result.maxDiff, result.answer);
}

function calculateDiff(ryan, info) {
  let diff = 0;
  for (let i = 0; i < 11; i++)
    if (ryan[i] > info[i]) diff += 10 - i;
    else if (info[i] > 0) diff -= 10 - i;
  return diff;
}

function check(ryan, answer) {
  for (let i = 10; i >= 0; i--)
    if (ryan[i] !== answer[i]) return ryan[i] > answer[i];
  return false;
}

function solution(n, info) {
  const { maxDiff, answer } = dfs(
    0,
    n,
    new Array(11).fill(0),
    info,
    Number.NEGATIVE_INFINITY,
    [-1]
  );

  return maxDiff <= 0 ? [-1] : answer;
}
