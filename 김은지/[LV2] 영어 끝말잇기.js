function solution(n, words) {
  const alreadySpeak = new Set([words[0]]);

  for (let i = 1; i < words.length; i++) {
    if (words[i].at(0) !== words[i - 1].at(-1) || alreadySpeak.has(words[i]))
      return [(i % n) + 1, Math.floor(i / n) + 1];
    alreadySpeak.add(words[i]);
  }

  return [0, 0];
}
