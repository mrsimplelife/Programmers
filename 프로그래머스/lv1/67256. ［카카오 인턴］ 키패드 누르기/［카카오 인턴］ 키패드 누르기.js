function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  const dist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

  let left = [3, 0];
  let right = [3, 2];
  let result = '';

  for (const num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      result += 'L';
      left = keypad[num];
    } else if (num === 3 || num === 6 || num === 9) {
      result += 'R';
      right = keypad[num];
    } else {
      const leftDist = dist(keypad[num], left);
      const rightDist = dist(keypad[num], right);

      if (leftDist < rightDist || (leftDist === rightDist && hand === 'left')) {
        result += 'L';
        left = keypad[num];
      } else {
        result += 'R';
        right = keypad[num];
      }
    }
  }

  return result;
}