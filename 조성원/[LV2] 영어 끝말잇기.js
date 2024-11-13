function solution(n, words) {
  const wordSet = new Set();

  for (const [index, word] of words.entries()) {
    if (wordSet.has(word) || (index > 0 && word[0] !== words[index - 1].at(-1)))
      return [(index % n) + 1, Math.ceil((index + 1) / n)];
    wordSet.add(word);
  }

  return [0, 0];
}
