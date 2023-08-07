function solution(n) {
  const sortedDigits = String(n).split('').sort((a, b) => b - a).join('');
  return parseInt(sortedDigits, 10);
}