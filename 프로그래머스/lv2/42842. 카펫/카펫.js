function solution(brown, yellow) {
    const total = brown + yellow
    
    for (let i = parseInt(brown / 2) - 1; i >= 3; i--){
        if (total % i === 0) {
            let width = i;
            let height = total / i
            if((width - 2) * (height - 2) === yellow){
                return [width,height]
            }
        }
    }
    
}