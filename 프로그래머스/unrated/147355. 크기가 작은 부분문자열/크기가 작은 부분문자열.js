function solution(t, p) {
    const arr = []
    for (let i = 0; i < t.length - (p.length-1); i++){
        let str=''
        for (let j = 0; j < p.length; j++){
            str += t[i + j]
        }
        arr.push(parseInt(str));
    }
    return arr.filter(a => a <= p).length
}