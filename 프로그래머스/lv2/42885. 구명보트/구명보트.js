function solution(people, limit) {
    let left = 0;
    let right = people.length - 1
    const arr = people.sort((a,b)=>a-b);
    let ship = 0
    while(left <= right){
        if(arr[left] + arr[right] <= limit){
            right--
            left++
        } else {
            right--
        }
        ship++
    }
    return ship
}