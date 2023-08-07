function solution(knightCount, limit, insteadPower) {
    const arr=[];
    for (let knightNumber = 1; knightNumber <= knightCount; knightNumber++){
        const canPower = getDivisors(knightNumber).length
        arr.push(canPower > limit ? insteadPower : canPower)
    }
    return arr.reduce((p,c)=>p+c,0);
}

function getDivisors(number) {
    const divisors = [];
    const sqrt = Math.sqrt(number);

    for (let i = 1; i <= sqrt; i++) {
        if (number % i === 0) {
            divisors.push(i);
            if (i !== sqrt) {
                divisors.push(number / i);
            }
        }
    }

    return divisors;
}