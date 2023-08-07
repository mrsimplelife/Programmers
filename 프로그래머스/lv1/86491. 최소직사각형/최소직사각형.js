function solution(sizes) {
    let min=Math.min(...sizes[0])
    let max=Math.max(...sizes[0])
    sizes.forEach(size => {
        min = Math.max(Math.min(...size),min)
        max = Math.max(...size, max)
    })
    return min * max
}