function solution(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}