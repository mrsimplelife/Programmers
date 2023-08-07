function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      const prevIdx = stack.pop();
      result[prevIdx] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}


