function solution(number) {
    let count = 0
    for(let one = 0; one < number.length; one++){
        for(let two = one+1; two < number.length; two++){
            for(let three = two+1; three < number.length; three++){
               if(number[one] + number[two] + number[three] === 0) {
                   count++
               }
            }
        }
    }
    return count
}