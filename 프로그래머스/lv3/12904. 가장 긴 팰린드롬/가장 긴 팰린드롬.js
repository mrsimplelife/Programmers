function solution(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    let maxLen = 1;

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLen = 2;
        }
    }

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                maxLen = len;
            }
        }
    }

    return maxLen;
}