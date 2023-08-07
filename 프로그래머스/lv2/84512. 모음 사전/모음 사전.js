function generateCombinations() {
    const vowels = 'AEIOU';
    const indices = [];

    for (let length = 1; length <= 5; length++) {
        const combinations = new Array(length).fill(vowels);
        for (let i = 0; i < vowels.length ** length; i++) {
            const combination = combinations.map((v, idx) => v[Math.floor(i / vowels.length ** idx) % vowels.length]);
            indices.push(combination.join(''));
        }
    }

    return indices.sort();
}

function solution(word) {
    const indices = generateCombinations();
    const index = indices.indexOf(word);
    return index + 1;
}
