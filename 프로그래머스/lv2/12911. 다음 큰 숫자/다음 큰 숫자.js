function countOneBits(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

function solution(n) {
  const targetCount = countOneBits(n);
  let nextNumber = n + 1;
  while (true) {
    if (countOneBits(nextNumber) === targetCount) {
      return nextNumber;
    }
    nextNumber += 1;
  }
}






