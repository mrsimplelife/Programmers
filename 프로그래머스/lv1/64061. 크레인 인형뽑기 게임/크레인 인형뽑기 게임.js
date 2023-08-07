function solution(board, moves) {
  const N = board.length;
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const col = move - 1;
    let row = 0;

    while (row < N && board[row][col] === 0) {
      row++;
    }

    if (row === N) continue;

    const doll = board[row][col];
    board[row][col] = 0;

    if (basket.length > 0 && basket[basket.length - 1] === doll) {
      basket.pop();
      result += 2;
    } else {
      basket.push(doll);
    }
  }

  return result;
}