function solution(num) {
    let answer = 0;
    for (let i = 1; i * (i + 1) / 2 <= num; i++) {
        if ((num - i * (i + 1) / 2) % i === 0) {
            answer++;
        }
    }
    return answer;
}

