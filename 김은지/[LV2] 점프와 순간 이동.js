// K칸 앞으로 점프 - K만큼 사용량
// or
// 현재까지 온 거리 * 2로 순간이동 - 사용량 X
// N까지 이동할 때 최솟

function solution(n) {
  let usage = 0;

  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      usage++;
      n -= 1;
    }
  }

  return usage;
}

// 메모리 부족, 시간 초과
// function solution(n) {
//     const dp = Array.from({ length: n + 1 }, (_, i) => i);

//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + 1;

//         if (i % 2 === 0) {
//             dp[i] = Math.min(dp[i], dp[i / 2]);
//         }
//     }

//     return dp[n];
// }
