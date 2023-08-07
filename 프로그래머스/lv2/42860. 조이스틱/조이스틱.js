function solution(name) {
    let answer = 0;
    let turn = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let code = name.charCodeAt(i) - 65;
        answer += code < 14 ? code : 26 - code;

        let next = i + 1;
        while (next < name.length && name[next] === 'A') {
            next++;
        }
        turn = Math.min(turn, i + name.length - next + Math.min(i, name.length - next));
    }

    answer += turn;
    return answer;
}