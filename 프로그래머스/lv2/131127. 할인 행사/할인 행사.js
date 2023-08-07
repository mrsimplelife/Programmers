function solution(want, number, discount) {
    let answer = 0
    const dict = {}
    want.forEach((w,i) => {
       dict[w] = number[i]
    })
    const entries = Object.entries(dict);
    convertSubArrays(discount).forEach(tenDays=>{
        if(entries.every(([want,number])=>countElement(tenDays, want) === number)){answer++}
    })
    return answer
}

function countElement(arr, element) {
  return arr.reduce((count, current) => current === element ? count + 1 : count, 0);
}
function convertSubArrays(arr) {
  return arr.map((_, i) => arr.slice(i, i + 10)).filter(element=>element.length === 10);
}
