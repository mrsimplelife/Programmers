function solution(ingredient) {
    let result = 0
    
    let bbangQueue = []
    
    let i = 0;
    
    while(i < ingredient.length) {
        if (
            ingredient[i] === 1 ||
            ingredient[i] === 2 ||
            ingredient[i] === 3
        ) {
            bbangQueue.push(ingredient[i])
        }
       
        if (
            bbangQueue[bbangQueue.length - 4] === 1 &&
            bbangQueue[bbangQueue.length - 3] === 2 &&
            bbangQueue[bbangQueue.length - 2] === 3 &&
            bbangQueue[bbangQueue.length - 1] === 1
        ) {
            bbangQueue.pop()
            bbangQueue.pop()
            bbangQueue.pop()
            bbangQueue.pop()
            result += 1
        }
        i += 1
    }
    return result
}