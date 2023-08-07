function solution(keymap, targets) {
  return targets.map((targetWord) => {
    let typingCount = 0;
    targetWord.split('').forEach((char) => {
      const availableKeys = keymap.filter((key) => key.includes(char));
      let availableTypingCount = Infinity;
      availableKeys.forEach((key) => {
        const keyIndex = key.indexOf(char);
        availableTypingCount = Math.min(availableTypingCount, keyIndex + 1);
      });
      typingCount += availableTypingCount;
    });
    return typingCount === Infinity ? -1 : typingCount;
  });
}