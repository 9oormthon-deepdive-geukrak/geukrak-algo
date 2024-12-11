const solution = (s) => {
  const tuples = s
    .slice(2, -2)
    .split("},{")
    .map((str) => str.split(",").map(Number));

  const uniqueNumbers = new Set();
  tuples.sort((a, b) => a.length - b.length);
  for (const tuple of tuples) for (const num of tuple) uniqueNumbers.add(num);

  return Array.from(uniqueNumbers);
};
