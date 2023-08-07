function solution(s) {
    let count = 0
    for(let i = 0; i < s.length;i++){
     if(check(s.substring(i+1)+s.substring(0,i+1))){
         count++
     }
    }
    return count;
}

function check(given){
    const stack = []
    const a = [...given]
    a.forEach(s => {
        if (s === '[') {
            stack.push(s)
        } else if (s === '(') {
            stack.push(s)
        } else if (s === '{') {
            stack.push(s)
        } else if (s === ']') {
            if (stack[stack.length-1] == '['){
                stack.pop()
            } else{
                stack.push(s)
            }
        } else if (s === '}') {
            if (stack[stack.length-1] == '{'){
                stack.pop()
            } else{
                stack.push(s)
            }
        } else if (s === ')') {
            if (stack[stack.length-1] == '('){
                stack.pop()
            } else{
                stack.push(s)
            }
        }
    })
    return stack.length === 0
}