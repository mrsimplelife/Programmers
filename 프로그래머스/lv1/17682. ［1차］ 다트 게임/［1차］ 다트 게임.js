function solution(dartResult) {
  const scores = [0, 0, 0];
  let currentScoreIdx = -1;

  for (let i = 0; i < dartResult.length; i++) {
    const char = dartResult[i];

    if (char >= '0' && char <= '9') {
      currentScoreIdx++;
      if (dartResult[i + 1] === '0') {
        scores[currentScoreIdx] = 10;
        i++;
      } else {
        scores[currentScoreIdx] = parseInt(char);
      }
    } else if (char === 'S') {
      continue;
    } else if (char === 'D') {
      scores[currentScoreIdx] = Math.pow(scores[currentScoreIdx], 2);
    } else if (char === 'T') {
      scores[currentScoreIdx] = Math.pow(scores[currentScoreIdx], 3);
    } else if (char === '*') {
      scores[currentScoreIdx] *= 2;
      if (currentScoreIdx > 0) {
        scores[currentScoreIdx - 1] *= 2;
      }
    } else if (char === '#') {
      scores[currentScoreIdx] *= -1;
    }
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}