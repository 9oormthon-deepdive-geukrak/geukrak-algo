function getPermutations(arr) {
  if (arr.length <= 1) return [arr];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const perms = getPermutations(remaining);

    for (const perm of perms) result.push([current, ...perm]);
  }

  return result;
}

function solution(n, weak, dist) {
  const len = weak.length;
  const linearWeak = weak.concat(weak.map((w) => w + n));
  const permutations = getPermutations(dist);
  let minCount = Number.POSITIVE_INFINITY;

  for (const friends of permutations) {
    for (let start = 0; start < len; start++) {
      const weakPoints = linearWeak.slice(start, start + len);
      let count = 1;
      let coverage = weakPoints[0] + friends[0];
      let idx = 0;

      for (let friendIdx = 1; friendIdx < friends.length; friendIdx++) {
        while (idx < len && weakPoints[idx] <= coverage) idx++;

        if (idx >= len) {
          minCount = Math.min(minCount, count);
          break;
        }

        coverage = weakPoints[idx] + friends[friendIdx];
        count++;
      }

      while (idx < len && weakPoints[idx] <= coverage) idx++;

      if (idx >= len) minCount = Math.min(minCount, count);
    }
  }

  return minCount === Number.POSITIVE_INFINITY ? -1 : minCount;
}

// function solution(n, weak, dist) {
//   const linearWeak = [...weak, ...weak.map((w) => w + n)];

//   dist.sort((a, b) => b - a);

//   let answer = Number.POSITIVE_INFINITY;

//   for (let start = 0; start < weak.length; start++) {
//     let remainingWeak = linearWeak.slice(start, start + weak.length);
//     let distIndex = 0;
//     let count = 0;

//     while (remainingWeak.length > 0 && distIndex < dist.length) {
//       const maxDist = dist[distIndex++];
//       count++;

//       const covered = remainingWeak[0] + maxDist;

//       remainingWeak = remainingWeak.filter((w) => w > covered);
//     }

//     if (remainingWeak.length === 0) answer = Math.min(answer, count);
//   }

//   return answer === Number.POSITIVE_INFINITY ? -1 : answer;
// }
