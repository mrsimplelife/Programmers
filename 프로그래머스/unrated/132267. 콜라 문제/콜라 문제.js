function solution(a,b,n) {
    let now = n;
    let canGive = now - parseInt(now % a)
    let soGet = canGive / a * b
    let answer = 0
    while(now >= a){
        answer += soGet
        now = now - canGive + soGet
        canGive = now - parseInt(now % a)
        soGet = parseInt(canGive / a) * b
    }
    return answer;
}
