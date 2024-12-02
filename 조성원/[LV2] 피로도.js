function exploreDungeons(k, dungeons, visited) {
  let maxDungeons = 0;

  for (let i = 0; i < dungeons.length; i++) {
    const [required, fatigue] = dungeons[i];
    if (visited[i] || k < required) continue;
    visited[i] = true;
    maxDungeons = Math.max(
      maxDungeons,
      1 + exploreDungeons(k - fatigue, dungeons, visited)
    );
    visited[i] = false;
  }

  return maxDungeons;
}

function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(false);
  return exploreDungeons(k, dungeons, visited);
}
