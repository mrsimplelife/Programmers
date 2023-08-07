function solution(m, n, board) {
    let temp = board.map(s => s.split(''))
    let canRemove = []
    
    while (true){
        temp.forEach((rowArr, row) => {
            rowArr.forEach((colString, col) => {
                check(temp,row,col) && canRemove.push([row,col])
            })
        })
        
        if (canRemove.length === 0) {
            break
        }
        
        canRemove.forEach(([row,col]) => temp[row][col] = ' ')
        
        const temp1 = temp.reverse()
        
        temp1.forEach((row, rowIndex)=>{
            row.forEach((col, colIndex)=>{
                if(col === ' '){
                    for(let i = rowIndex +1; i < temp1.length; i++){
                        if (temp1[i][colIndex] !== ' ' ){
                            temp1[rowIndex][colIndex] = temp1[i][colIndex]
                            temp1[i][colIndex] = ' '
                            break
                        }
                    }
                }
            })
        })
        temp = temp1.reverse()
        canRemove = []
    }
    return temp.reduce((a, b)=> a + b.reduce((a, b) => a + (b === ' ' ? 1 : 0), 0) ,0)
}

function check(arr,row,col){
    if(arr[row][col] === ' '){
        return false
    }
    const self = arr[row][col]
    const isNotFirstRow = row > 0
    const isNotLastRow = row < arr.length - 1
    return isNotFirstRow && arr[row - 1][col - 1] === self && isNotFirstRow && arr[row - 1][col] === self && arr[row][col - 1] === self || 
           isNotFirstRow && arr[row - 1][col] === self && isNotFirstRow && arr[row - 1][col + 1] === self && arr[row][col + 1] === self ||
           arr[row][col - 1] === self && isNotLastRow && arr[row + 1][col - 1] === self && isNotLastRow && arr[row + 1][col] === self ||
           arr[row][col + 1] === self && isNotLastRow && arr[row + 1][col] === self && isNotLastRow && arr[row + 1][col + 1] === self
}