function solution(m, n, puddles) {
  const mod = 1000000007;
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  dp[1][0] = 1;

  for (const puddle of puddles) {
    const [x, y] = puddle;
    dp[y][x] = -1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % mod;
      }
    }
  }

  return dp[n][m];
}