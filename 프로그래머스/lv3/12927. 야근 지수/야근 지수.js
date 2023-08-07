// function solution(n, works) {
//   works.sort((a, b) => b - a);
//   while (n > 0) {
//     if (works[0] === 0) {
//         break;
//     }
//     works[0]--;
//     n--;
//     works.sort((a, b) => b - a);
//   }
//   const fatigue = works.reduce((acc, work) => acc + work ** 2, 0);
//   return fatigue;
// }



function solution(n, works) {
  const heap = new MinHeap();
  works.forEach(work => heap.push(-work));
  
  while (n > 0) {
    if (heap.size === 0) {
      break;
    }
    const maxWork = -heap.pop();
    if (maxWork === 0) {
      break;
    }
    heap.push(-(maxWork - 1));
    n--;
  }
  
  let fatigue = 0;
  while (heap.size > 0) {
    const work = -heap.pop();
    fatigue += work ** 2;
  }
  
  return fatigue;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return root;
  }

  bubbleUp(idx) {
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      if (element >= parent) break;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  bubbleDown(start) {
    const element = this.heap[start];
    const length = this.heap.length;
    let idx = start;
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let swapIdx = null;
      if (leftChildIdx < length && this.heap[leftChildIdx] < element) {
        swapIdx = leftChildIdx;
      }
      if (rightChildIdx < length && this.heap[rightChildIdx] < (swapIdx === null ? element : this.heap[leftChildIdx])) {
        swapIdx = rightChildIdx;
      }
      if (swapIdx === null) break;
      this.heap[idx] = this.heap[swapIdx];
      idx = swapIdx;
    }
    this.heap[idx] = element;
  }
}