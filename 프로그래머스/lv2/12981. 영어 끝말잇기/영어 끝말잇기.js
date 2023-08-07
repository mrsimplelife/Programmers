function solution(n, words) {
    const aleady = {}
    for (let i = 0; i < words.length; i++){
        const before = words[i - 1]
        const now = words[i]
        if(aleady[now] || i !== 0 &&  before[before.length - 1] !== now[0]){
            return [(i) % n + 1, Math.ceil((i + 1) / n)]
        }
        aleady[now] = true
    }
    return [0,0]
}