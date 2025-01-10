function solution(s) {
  let transformationCount = 0;
  let removedZerosCount = 0;

  while (s !== '1') {
      const replacedS = s.replaceAll('0', '');
      const zeroCount = s.length - replacedS.length;
      removedZerosCount += zeroCount;

      s = replacedS.length.toString(2);

      transformationCount++;
  }

  return [transformationCount, removedZerosCount];
}