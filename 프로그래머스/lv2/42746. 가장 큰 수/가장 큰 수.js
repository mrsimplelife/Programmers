function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => {
        const num1 = String(a) + String(b);
        const num2 = String(b) + String(a);
        return num2 - num1;
    });

    if (sortedNumbers[0] === 0) return "0";

    return sortedNumbers.join("");
}