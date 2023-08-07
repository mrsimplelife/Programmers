function isAllowed(word) {
    const sounds = ["aya", "ye", "woo", "ma"];
    let i = 0;
    let prevSound = null;

    while (i < word.length) {
        let found = false;
        for (const sound of sounds) {
            if (word.slice(i).startsWith(sound) && sound !== prevSound) {
                i += sound.length;
                prevSound = sound;
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }

    return true;
}

function solution(babbling) {
    let count = 0;
    for (const word of babbling) {
        if (isAllowed(word)) {
            count++;
        }
    }
    return count;
}