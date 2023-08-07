function solution(numbers) {
    const digits = numbers.split("");
    const uniqueNumbers = new Set();
    for (let i = 1; i <= digits.length; i++) {
        const permutations = getPermutations(digits, i);
        permutations.forEach((permutation) => {
            const number = parseInt(permutation.join(""), 10);
            if (isPrime(number)) {
                uniqueNumbers.add(number);
            }
        });
    }
    return uniqueNumbers.size;
}

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}


function getPermutations(arr, selectedNum) {
    const result = [];
    if (selectedNum === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectedNum - 1);
        const attached = permutations.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
}


