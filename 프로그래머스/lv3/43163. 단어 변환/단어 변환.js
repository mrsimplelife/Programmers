function canTransform(a, b) {
  let diffCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diffCount++;
    }
    if (diffCount > 1) {
      return false;
    }
  }
  return diffCount === 1;
}

function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const visited = new Set();
  const queue = [];
  queue.push({ word: begin, step: 0 });

  while (queue.length > 0) {
    const { word, step } = queue.shift();

    if (word === target) {
      return step;
    }

    for (const nextWord of words) {
      if (!visited.has(nextWord) && canTransform(word, nextWord)) {
        visited.add(nextWord);
        queue.push({ word: nextWord, step: step + 1 });
      }
    }
  }

  return 0;
}