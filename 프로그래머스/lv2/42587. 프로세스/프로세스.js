function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  let count = 0;

  while (queue.length > 0) {
    const front = queue[0];
    if (queue.some((item) => item.priority > front.priority)) {
      queue.shift();
      queue.push(front);
    } else {
      queue.shift();
      count++;
      if (front.index === location) return count;
    }
  }

  return count;
}