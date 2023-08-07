function solution(lottos, win_nums) {
  const countZero = lottos.filter((num) => num === 0).length;
  const countCorrect = lottos.filter((num) => win_nums.includes(num)).length;

  const maxRank = 7 - (countCorrect + countZero);
  const minRank = 7 - countCorrect;

  return [maxRank > 6 ? 6 : maxRank, minRank > 6 ? 6 : minRank];
}