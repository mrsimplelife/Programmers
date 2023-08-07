function solution(cards1, cards2, goal) {
    const usedCards = new Set();

    let goalIndex = 0;
    const success = makeWordArray(cards1, cards2);
    return success ? "Yes" : "No"
    function makeWordArray(cards1, cards2) {
        if (goalIndex === goal.length) {
          return true;
        }

        if (cards1.length > 0) {
          const word = cards1[0];

          if (word === goal[goalIndex]) {
            usedCards.add(word);
            goalIndex++;

            cards1.shift();

            if (makeWordArray(cards1, cards2)) {
              return true;
            }
            usedCards.delete(word);
            goalIndex--;
            cards1.unshift(word);
          }
        }

        if (cards2.length > 0) {
          const word = cards2[0];

          if (word === goal[goalIndex]) {
            usedCards.add(word);
            goalIndex++;

            cards2.shift();

            if (makeWordArray(cards1, cards2)) {
              return true;
            }

            usedCards.delete(word);
            goalIndex--;
            cards2.unshift(word);
          }
        }

        return false;
    }
}
