function solution(p) {
    if (p === '') return '';

    let [u, v] = divideString(p);

    if (isBalanced(u)) {
        return u + solution(v);
    } else {
        return '(' + solution(v) + ')' + reverseAndRemove(u);
    }
}

function divideString(str) {
    let count = 0;
    let idx = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            idx = i;
            break;
        }
    }

    return [str.slice(0, idx + 1), str.slice(idx + 1)];
}

function isBalanced(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            count++;
        } else {
            count--;
        }
        if (count < 0) return false;
    }
    return true;
}

function reverseAndRemove(str) {
    return str.slice(1, str.length - 1).replace(/\(|\)/g, char => char === '(' ? ')' : '(');
}