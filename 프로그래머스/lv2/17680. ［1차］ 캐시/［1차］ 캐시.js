function solution(cacheSize, cities) {
  const cache = [];
  let totalTime = 0;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();

    if (cache.includes(city)) {
      totalTime += 1;
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
    } else {
      totalTime += 5;
      cache.push(city);
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  }

  return totalTime;
}
