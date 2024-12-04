function removeElement(arr, index) {
  const copy = arr.slice();
  copy.splice(index, 1);
  return copy;
}

function generatePermutations(arr) {
  if (arr.length === 1) return [arr];

  const permutations = [];
  for (let i = 0; i < arr.length; i++) {
    const remaining = removeElement(arr, i);
    for (const perm of generatePermutations(remaining)) {
      permutations.push([arr[i], ...perm]);
    }
  }
  return permutations;
}

// 원형 배열을 선형 배열로 확장
function expandWeakPoints(weak, n) {
  return weak.concat(weak.map((point) => point + n));
}

// 특정 친구 배치로 취약 지점 커버 가능 여부 확인
function calculateFriendsNeeded(expandedWeak, start, friends) {
  let friendCount = 1;
  let maxCoverage = expandedWeak[start] + friends[friendCount - 1]; // start 친구의 커버 범위

  for (let i = start; i < start + expandedWeak.length / 2; i++) {
    if (expandedWeak[i] > maxCoverage) {
      friendCount++;
      if (friendCount > friends.length) return Infinity; // 친구 초과 시 실패
      maxCoverage = expandedWeak[i] + friends[friendCount - 1];
    }
  }

  return friendCount;
}

function solution(n, weak, dist) {
  const expandedWeak = expandWeakPoints(weak, n);

  dist.sort((a, b) => b - a);

  let minFriends = dist.length + 1;

  const allPermutations = generatePermutations(dist);

  // 모든 시작 지점과 친구 배치에 대해 탐색
  for (let start = 0; start < weak.length; start++) {
    for (const friends of allPermutations) {
      const friendsNeeded = calculateFriendsNeeded(expandedWeak, start, friends);
      minFriends = Math.min(minFriends, friendsNeeded);
    }
  }

  return minFriends > dist.length ? -1 : minFriends;
}

