function solution(arr) {
  let compressed = [0, 0];

  function quadtree(x, y, n) {
    const first = arr[x][y];
    let isCompressed = true;

    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[i][j] !== first) {
          isCompressed = false;
          break;
        }
      }
      if (!isCompressed) break;
    }

    if (isCompressed) {
      compressed[first]++;
    } else {
      const half = n / 2;
      quadtree(x, y, half);
      quadtree(x, y + half, half);
      quadtree(x + half, y, half);
      quadtree(x + half, y + half, half);
    }
  }

  const n = arr.length;
  quadtree(0, 0, n);

  return compressed;
}