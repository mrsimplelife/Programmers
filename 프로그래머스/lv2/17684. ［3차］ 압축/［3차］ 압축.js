function solution(msg) {
    const dictionary = {};
    let nextIndex = 27;
    const result = [];

    for (let i = 1; i <= 26; i++) {
        dictionary[String.fromCharCode(i + 64)] = i;
    }

    let i = 0;
    while (i < msg.length) {
        let w = msg[i];
        let c = msg[i + 1];

        while (dictionary.hasOwnProperty(w + c) && i < msg.length - 1) {
            w += c;
            i++;
            c = msg[i + 1];
        }

        dictionary[w + c] = nextIndex++;
        result.push(dictionary[w]);

        i++;
    }

    return result;
}
