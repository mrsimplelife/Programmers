function solution(n) {
  const reversedArray = [];
  while (n > 0) {
    reversedArray.push(n % 10);
    n = Math.floor(n / 10);
  }
  return reversedArray;
}
