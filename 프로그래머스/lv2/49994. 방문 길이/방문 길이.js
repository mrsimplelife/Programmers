function solution(dirs) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const visited = new Set();
    let x = 0, y = 0;
    let answer = 0;

    for (const dir of dirs) {
        let nx = x + dx[getDirection(dir)];
        let ny = y + dy[getDirection(dir)];

        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
            continue;
        }

        const start = `${x}${y}${nx}${ny}`;
        const end = `${nx}${ny}${x}${y}`;

        if (!visited.has(start) && !visited.has(end)) {
            visited.add(start);
            visited.add(end);
            answer++;
        }

        x = nx;
        y = ny;
    }

    return answer;
}

function getDirection(dir) {
    if (dir === 'U') return 0;
    if (dir === 'D') return 1;
    if (dir === 'R') return 2;
    if (dir === 'L') return 3;
}
