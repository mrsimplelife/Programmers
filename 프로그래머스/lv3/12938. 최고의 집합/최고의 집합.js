function solution(n, s) {
  const quotient = Math.floor(s / n);
  const remainder = s % n;
  
  if (quotient === 0) {
    return [-1];
  }
  
  const answer = Array(n).fill(quotient); 
  
  for (let i = n - 1; i >= n - remainder; i--) {
    answer[i]++;
  }
  
  return answer;
}
