function solution(name, yearning, photo) {
    const score = {}
    name.forEach((n,i)=>{
        score[n]=yearning[i]
    })
    return photo.map(p=> p.reduce((p,c) => p + (score[c] ?? 0) ,0))
}