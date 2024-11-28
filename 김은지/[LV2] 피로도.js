function removeElem(arr, i, cnt) {
  const copyArr = arr.slice();
  copyArr.splice(i, cnt);
  return copyArr;
}

function permutation(arr) {
  if (arr.length === 1) return [arr];

  const perm = [];
  for (let i = 0; i < arr.length; i++) {
    for (const rest of permutation(removeElem(arr, i, 1))) {
      perm.push([arr[i], ...rest]);
    }
  }
  return perm;
}

function explore(remainFatigue, dungeons) {
  const stack = dungeons;

  let cnt = 0;
  while (stack.length > 0) {
    const [needFatigue, payFatigue] = stack.pop();

    if (remainFatigue < needFatigue) continue;
    cnt++;
    remainFatigue -= payFatigue;
  }
  return cnt;
}

function solution(k, dungeons) {
  let maxDungeon = 0;
  for (const explorationOrder of permutation(dungeons)) {
    maxDungeon = Math.max(maxDungeon, explore(k, explorationOrder));
  }

  return maxDungeon;
}
