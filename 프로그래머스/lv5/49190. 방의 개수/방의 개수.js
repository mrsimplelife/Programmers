function solution(arrows) {
    let visitedNodes = new Set();
    let visitedEdges = new Set();
    let x = 0;
    let y = 0;

    const dx = [1, 1, 0, -1, -1, -1, 0, 1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];

    let rooms = 0;

    for (const arrow of arrows) {
        for (let i = 0; i < 2; i++) {
            const nx = x + dx[arrow];
            const ny = y + dy[arrow];

            const current = `${x},${y}`;
            const next = `${nx},${ny}`;

            const edge = [current, next].sort().join(",");

            if (visitedNodes.has(next) && !visitedEdges.has(edge)) {
                rooms += 1;
            }

            visitedNodes.add(current);
            visitedNodes.add(next);
            visitedEdges.add(edge);

            x = nx;
            y = ny;
        }
    }

    return rooms;
}