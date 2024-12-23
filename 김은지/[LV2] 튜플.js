function solution(s) {
  arr = eval(s.replaceAll("{", "[").replaceAll("}", "]"));
  arr.sort((a, b) => a.length - b.length);

  return [
    ...arr.reduce((acc, curr) => {
      acc.add(...curr.filter((num) => !acc.has(num)));
      return acc;
    }, new Set()),
  ];
}
