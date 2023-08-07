function solution(N, stages) {
    var answer = [];
    var challenger=stages.length;
    for (let i = 0; i < N; i++) {        
        var per;
        if(challenger===0){
            per=0
        }else{
            var fail=stages.filter(function (stage) {
                return stage === i + 1;
            }).length;
            per= fail/challenger;
        }        
        answer.push({stage:i+1,per:per})
        challenger-=fail;
    }
    answer.sort((a,b)=>{
        if(b.per===a.per){
            return a.stage-b.stage;
        }
        return b.per-a.per;
    });
    answer=answer.map(a=>{
        return a.stage;
    })

    return answer;
}