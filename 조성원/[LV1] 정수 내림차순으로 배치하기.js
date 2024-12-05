const solution = (n) =>
  Number.parseInt(
    `${n}`
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
