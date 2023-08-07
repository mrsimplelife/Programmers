function solution(meter,roller,section) {
    const isPaint = Array(meter).fill(true)
    for(let i = 0; i < section.length; i++){
        isPaint[section[i]-1] = false
    }
    let count=0;
    for(let i = 0; i < isPaint.length; i++){
        if (!isPaint[i]){
            count++
            for (let j = 0; j < roller; j++){
                isPaint[i+j] = true
            }
        }
    }
    return count
}
