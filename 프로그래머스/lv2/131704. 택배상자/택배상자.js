function solution(order) {
  const container = Array(order.length)
    .fill(order.length)
    .map((_, i) => order.length - i);
  const subContainer = [];
  const truck = []
  let i = 0;
  while (i <order.length) {
    if (subContainer[subContainer.length - 1] === order[i]) {
      const thing = subContainer.pop();
      truck.push(thing)
      i++;
    } else if (container[container.length - 1] === order[i]) {
      const thing = container.pop();
      truck.push(thing)
      i++;
    } else if (
      container.length > 0 &&
      container[container.length - 1] !== order[i]
    ) {
      const thing = container.pop();
      subContainer.push(thing);
    } else {
      break;
    }
  }
  return truck.length;
}
