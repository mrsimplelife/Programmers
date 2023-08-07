function solution(N, stations, W) {
  const result = [];
  let last_covered = 0;

  for (const station of stations) {
    const left_bound = station - W;
    const right_bound = station + W;

    if (left_bound > last_covered) {
      result.push(left_bound - last_covered - 1);
    }
    last_covered = right_bound;
  }

  if (last_covered < N) {
    result.push(N - last_covered);
  }

  let answer = 0;
  for (const distance of result) {
    answer += Math.ceil(distance / (2 * W + 1));
  }

  return answer;
}
