function solution(x) {
  const sumOfDigits = String(x).split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return x % sumOfDigits === 0;
}