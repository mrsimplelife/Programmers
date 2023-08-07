function solution(answers) {
    const answer = [];
    const first=[1, 2, 3, 4, 5];
    const second=[2, 1, 2, 3, 2, 4, 2, 5];
    const third=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const countArr=[0,0,0];
    
    for(let i=0; i<answers.length;i++){
        if(first[i%first.length]===answers[i]){
            countArr[0]++;
        }
        if(second[i%second.length]===answers[i]){
            countArr[1]++;
        }
        if(third[i%third.length]===answers[i]){
            countArr[2]++;
        }
    }
    const max=Math.max(...countArr);
    for(let i=0;i<countArr.length;i++){
        if(max===countArr[i]){
            answer.push(i+1);
        }
    }
    return answer;
}