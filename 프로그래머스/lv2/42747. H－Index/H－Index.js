function solution(citations) {
    let hIndex = citations.length
    const sorted = citations.sort((a,b)=>a-b,0)
    for(let i = 0; i<sorted.length;i++){
        if (sorted[i] >= hIndex){
            return hIndex
        }
        hIndex --
    }
    return 0;
}