function solution(s) {
  let pCount = 0;
  let yCount = 0;
  for (let char of s.toLowerCase()) {
    if (char === 'p') {
      pCount++;
    } else if (char === 'y') {
      yCount++;
    }
  }
  return pCount === yCount;
}