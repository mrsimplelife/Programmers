function solution(arr) {
  const min = Math.min(...arr);
  const filteredArr = arr.filter((num) => num !== min);

  return filteredArr.length > 0 ? filteredArr : [-1];
}