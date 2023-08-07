function solution(number, k) {
    const stack = [];
    for (let i = 0; i < number.length; i++) {
        const currentNumber = number[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < currentNumber) {
            stack.pop();
            k--;
        }
        stack.push(currentNumber);
    }
    stack.splice(stack.length - k, k);
    return stack.join("");
}