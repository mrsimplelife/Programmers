function solution(n) {
    const isSosuArr = [false,false];
    for(let i=2; i<=n; i++){
        if(isSosuArr[i]===undefined){
            isSosuArr[i] = true;
            for(let j=i+i; j<=n; j+=i){
                isSosuArr[j] = false;
            }
        }
    }

    let answer = 0;
    for(let i=2;i<isSosuArr.length;i++){
        if(isSosuArr[i]){
            answer++;
        }
    }
    return answer;
}