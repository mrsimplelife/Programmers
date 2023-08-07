function solution(k, score) {
    const honer = []
    return score.map((s)=>{
        honer.push(s)
        const sorted = honer.sort((a,b) => b-a)
        return sorted[k - 1] || sorted[honer.length -1]
    })
}