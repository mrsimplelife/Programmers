function solution(topping) {
    let answer = 0;
    const left = {toppings:{},toppingCount:0}
    const right = {toppings:{},toppingCount:0};
    right.toppings = topping.reduce((a,b)=>{
        if(a[b] === undefined) {
            a[b] = 0
        }
        a[b] += 1
        return a
    }, {})
    right.toppingCount = Object.keys(right.toppings).length
    
    for (let i = 0; i < topping.length; i++) {
        if(left.toppings[topping[i]] === undefined){
            left.toppings[topping[i]] = 0
        }
        left.toppings[topping[i]] += 1
        if(left.toppings[topping[i]] === 1){
            left.toppingCount += 1
        }
        right.toppings[topping[i]] -= 1
        if(right.toppings[topping[i]] === 0){
            right.toppingCount -= 1
        }
        if (left.toppingCount === right.toppingCount) {
            answer += 1;
        }
    }
    return answer;
}