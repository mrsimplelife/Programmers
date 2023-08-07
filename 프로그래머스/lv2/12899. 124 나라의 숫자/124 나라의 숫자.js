function solution(n) {
    let answer = '';
    const digits = [4, 1, 2];

    while (n > 0) {
        const remainder = n % 3;
        answer = digits[remainder] + answer;
        n = Math.floor((n - 1) / 3);
    }

    return answer;
}