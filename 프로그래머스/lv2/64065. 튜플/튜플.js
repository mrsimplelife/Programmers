function solution(s) {
  const tuples = s.slice(2, -2).split("},{");
  const tupleArray = tuples.map((tuple) => tuple.split(",").map(Number));

  tupleArray.sort((a, b) => a.length - b.length);

  const result = [];
  for (let i = 0; i < tupleArray.length; i++) {
    for (let j = 0; j < tupleArray[i].length; j++) {
      const element = tupleArray[i][j];
      if (!result.includes(element)) {
        result.push(element);
      }
    }
  }

  return result;
}
