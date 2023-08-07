function solution(x, n) {
  const answer = [];
  let currentNumber = x;

  for (let i = 0; i < n; i++) {
    answer.push(currentNumber);
    currentNumber += x;
  }

  return answer;
}