function solution(arr, divisor) {
    let answer;
    answer = arr.filter(el => el % divisor === 0);
    if (answer.length === 0) {
      return [-1];
    }
    answer.sort((a,b)=>a-b);
    return answer;
}