function solution(k, m, score) {
    const n = score.length
    const sorted = score.sort((a, b) => b - a).slice(0, score.length - (n % m));
    const boxes = []
    sorted.forEach((s,i) => {
        boxes[parseInt(i/m)] = s * m
    })
    return boxes.reduce((p,c)=>p+c,0);
}
