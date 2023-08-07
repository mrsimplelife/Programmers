function solution(s) {
  let count = 0;
  let idx = 0;

  while (idx < s.length) {
    const target = s[idx];
    let xCount = 1;
    let otherCount = 0;
    let endIdx = idx + 1;

    while (endIdx < s.length) {
      if (s[endIdx] === target) {
        xCount++;
      } else {
        otherCount++;
      }

      if (xCount === otherCount) {
        break;
      }

      endIdx++;
    }

    count++;
    idx = endIdx + 1;
  }

  return count;
}
