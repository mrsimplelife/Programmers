function countDigits(num) {
  const count = Array(10).fill(0);
  for (const digit of num) {
    count[parseInt(digit)]++;
  }
  return count;
}

function solution(X, Y) {
  const countX = countDigits(X);
  const countY = countDigits(Y);
  let result = "";

  for (let digit = 9; digit >= 0; digit--) {
    const commonCount = Math.min(countX[digit], countY[digit]);
    if (commonCount) {
      result += digit.toString().repeat(commonCount);
    }
  }
  return result === "" ? "-1" : Number(result) === 0 ? "0":result
}
