function solution(array, commands) {
    let answer = [];
    for(const command of commands){
        const [from, to, index] = command;
        const sliced = array.slice(from - 1, to);
        sliced.sort((a, b)=> a - b);
        answer.push(sliced[index - 1]);
    }
    return answer;
}