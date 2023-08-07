function solution(food) {
    const order = food.slice(1)
                    .map(f=>Math.ceil((f-1)/2))
                    .map((f,i)=>(i+1).toString().repeat(f))
    return order.join('')+'0'+order.reverse().join('')
}