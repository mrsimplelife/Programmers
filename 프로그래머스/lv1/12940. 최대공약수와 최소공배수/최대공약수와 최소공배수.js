function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(n, m) {
    const gcdValue = gcd(n, m);
    const lcmValue = (n * m) / gcdValue;

    return [gcdValue, lcmValue];
}