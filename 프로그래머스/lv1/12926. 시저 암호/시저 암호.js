function solution(s, n) {
  const upperStart = 'A'.charCodeAt(0);
  const lowerStart = 'a'.charCodeAt(0);

  return s
    .split('')
    .map((char) => {
      if (char === ' ') {
        return ' ';
      }

      const isUpper = char === char.toUpperCase();
      const start = isUpper ? upperStart : lowerStart;
      const shiftedCode = ((char.charCodeAt(0) - start + n) % 26) + start;
      return String.fromCharCode(shiftedCode);
    })
    .join('');
}