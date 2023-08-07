function solution(s, skip, index) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .filter((v) => !skip.includes(v));
  const result = s.split('').map((v) => {
    const i = alphabet.indexOf(v);
    const newIndex = i + index;
    return alphabet[newIndex % alphabet.length];
  });
  return result.join('');
}
