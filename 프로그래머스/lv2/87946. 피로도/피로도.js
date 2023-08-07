function solution(k, dungeons) {
  let maxDungeons = 0;
  let visited = Array(dungeons.length).fill(false);

  function dfs(remainingFatigue, count) {
    maxDungeons = Math.max(maxDungeons, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [minFatigue, consumeFatigue] = dungeons[i];

      if (!visited[i] && remainingFatigue >= minFatigue) {
        visited[i] = true;
        dfs(remainingFatigue - consumeFatigue, count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);

  return maxDungeons;
}
