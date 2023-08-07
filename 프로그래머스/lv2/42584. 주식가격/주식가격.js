function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = prices.length - 2; i >= 0; i--) {
    const price = prices[i];
    let second = 0;

    while (stack.length && price <= stack[stack.length - 1][0]) {
      second += stack.pop()[1];
    }

    stack.push([price, second + 1]);
    answer[i] = stack[stack.length - 1][1];
  }

  return answer;
}