function solution(n, computers) {
    let answer = 0;
    let visited = new Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;

        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }

    return answer;
}
