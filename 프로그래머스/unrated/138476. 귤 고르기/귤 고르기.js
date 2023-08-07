function solution(k, tangerine) {
    const dict = tangerine.reduce((p,c)=>{
       if(p[c]===undefined){
           p[c]=0
       }
        p[c]++
       return p
    },{})
    const sortedKind = Object.values(dict).sort((a,b) => b - a)
    let total = 0
    for(let i = 0;i<sortedKind.length;i++){
        total += sortedKind[i]
        if(total >= k){
            return i + 1
        }
    }
    
}