function solution(x, y, n) {
  const MAX = 1000000;
  let dp = new Array(MAX + 1).fill(Infinity);

  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (dp[i] === Infinity) continue;
    if (i + n <= MAX) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    if (i * 2 <= MAX) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    if (i * 3 <= MAX) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

