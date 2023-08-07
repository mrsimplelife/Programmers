function solution(A, B) {
  const N = A.length;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;
  let aIndex = 0;
  let bIndex = 0;

  while (bIndex < N) {
    if (A[aIndex] < B[bIndex]) {
      answer++;
      aIndex++;
      bIndex++;
    } else {
      bIndex++;
    }
  }

  return answer;
}