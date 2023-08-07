function solution(operations) {
  const queue = [];

  for (let i = 0; i < operations.length; i++) {
    const [command, value] = operations[i].split(" ");

    if (command === "I") {
      insert(queue, parseInt(value));
    } else if (command === "D") {
      if (value === "1") {
        deleteMax(queue);
      } else if (value === "-1") {
        deleteMin(queue);
      }
    }
  }

  if (queue.length === 0) {
    return [0, 0];
  } else {
    const max = Math.max(...queue);
    const min = Math.min(...queue);
    return [max, min];
  }
}

function insert(queue, value) {
  queue.push(value);
}

function deleteMax(queue) {
  if (queue.length === 0) return;

  const maxIndex = queue.indexOf(Math.max(...queue));
  queue.splice(maxIndex, 1);
}

function deleteMin(queue) {
  if (queue.length === 0) return;

  const minIndex = queue.indexOf(Math.min(...queue));
  queue.splice(minIndex, 1);
}
