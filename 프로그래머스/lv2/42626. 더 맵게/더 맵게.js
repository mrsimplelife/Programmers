function solution(scoville, K) {
  const heap = new MinHeap();
  scoville.forEach((val) => heap.push(val));
  let mixCount = 0;

  while (heap.peek() < K) {
    const min1 = heap.pop();
    const min2 = heap.pop();
    const mixedScoville = min1 + min2 * 2;
    heap.push(mixedScoville);
    mixCount++;

    if (heap.size() === 1 && heap.peek() < K) {
      return -1;
    }
  }

  return mixCount;

}
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    const root = this.heap[0];
    const lastNode = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }
    return root;
  }

  heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.size()) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const smallerChildIndex =
        rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;
      if (this.heap[index] <= this.heap[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}