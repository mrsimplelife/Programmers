function solution(progresses, speeds) {
  let already = -1;
  let day = 0;
  let answer = [];

  while (progresses.length > 0) {
    if (progresses[0] + speeds[0] * day >= 100) {
      progresses.shift();
      speeds.shift();
      if (day !== already) {
        answer.push(1);
        already = day;
      } else {
        answer[answer.length - 1]++;
      }
    } else {
      day++;
    }
  }

  return answer;
}