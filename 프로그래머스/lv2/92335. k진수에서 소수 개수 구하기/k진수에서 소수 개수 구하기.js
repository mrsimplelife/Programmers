function solution(n, k) {
  let count = 0;
  const convertedNum = convertToBaseK(n, k);
  const numbers = convertedNum.split('0').filter(s=>s!='');
  for (const num of numbers) {
    if (hasCondition(num)) {
      count++;
    }
  }
  return count;
}

function convertToBaseK(n, k) {
  let result = '';
  while (n > 0) {
    result = (n % k) + result;
    n = Math.floor(n / k);
  }
  return result;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function hasCondition(num) {
  if (num === '0') {
    return false;
  }
  if (num.startsWith('0') && num.endsWith('0')) {
    return isPrime(parseInt(num));
  }
  if (num.endsWith('0')) {
    return isPrime(parseInt(num.slice(0, -1)));
  }
  if (num.startsWith('0')) {
    return isPrime(parseInt(num.slice(1)));
  }
  return isPrime(parseInt(num));
}

