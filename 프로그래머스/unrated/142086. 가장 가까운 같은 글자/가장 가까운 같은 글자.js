function solution(s) {
    const hash={
        [s[0]]:0
    }
    const answer = [-1]
    for(let i = 1; i<s.length; i++){
        if (hash[s[i]] !== undefined){
            answer.push(i - hash[s[i]])
        }else{
            answer.push(-1)
        }
        hash[s[i]] = i
        
    }
    return answer;
}