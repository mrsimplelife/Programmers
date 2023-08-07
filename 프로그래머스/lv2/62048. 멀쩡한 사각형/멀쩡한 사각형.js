function solution(w, h) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const unusable = w + h - gcd(w, h);
    return w * h - unusable;
}