function compress(s, unit) {
    let compressed = '';
    let count = 1;
    let prevStr = '';

    for (let i = 0; i < s.length; i += unit) {
        const currStr = s.substr(i, unit);

        if (prevStr === currStr) {
            count++;
        } else {
            compressed += (count > 1 ? count : '') + prevStr;
            prevStr = currStr;
            count = 1;
        }
    }

    compressed += (count > 1 ? count : '') + prevStr;
    return compressed;
}

function solution(s) {
    let answer = s.length;

    for (let unit = 1; unit <= s.length / 2; unit++) {
        const compressedStr = compress(s, unit);
        answer = Math.min(answer, compressedStr.length);
    }

    return answer;
}