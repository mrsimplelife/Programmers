function convertToBase(n, num) {
  // 10진수 num을 n진수로 변환하는 함수
  if (num === 0) {
    return '0';
  }
  const digits = '0123456789ABCDEF';
  let result = '';
  while (num > 0) {
    result = digits[num % n] + result;
    num = Math.floor(num / n);
  }
  return result;
}

function solution(n, t, m, p) {
  let answer = '';
  let numbersToSay = '';
  let num = 0;

  while (numbersToSay.length < t * m) {
    numbersToSay += convertToBase(n, num);
    num++;
  }

  for (let i = p - 1; i < t * m; i += m) {
    answer += numbersToSay[i];
  }

  return answer.slice(0, t);
}