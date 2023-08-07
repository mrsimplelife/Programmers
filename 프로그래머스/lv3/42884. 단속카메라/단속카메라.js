function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let cameraCount = 1;
    let endPoint = routes[0][1];
    
    for (let i = 0; i < routes.length; i++) {
        if (routes[i][0] > endPoint) {
            cameraCount++;
            endPoint = routes[i][1];
        }
    }
    
    return cameraCount;
}

