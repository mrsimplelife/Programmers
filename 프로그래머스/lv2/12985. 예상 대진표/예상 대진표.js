function solution(n,a,b)
{
    let round = 1
    for (let i = n; i > 1; i /= 2){
        if (Math.abs(a - b) === 1 && Math.ceil(a/2) === Math.ceil(b/2)){
            return round
        }
        if (a % 2 === 0) {
            a /= 2 
        } else {
            a++
            a /= 2 
        }
        if (b % 2 === 0) {
            b /= 2 
        } else {
            b++
            b /= 2 
        }
        round++
    }
}