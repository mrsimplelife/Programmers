function solution(n) {
    let ternary = '';

    while (n > 0) {
        ternary = (n % 3) + ternary;
        n = Math.floor(n / 3);
    }

    let reversedTernary = ternary.split('').reverse().join('');
    return parseInt(reversedTernary, 3);
}