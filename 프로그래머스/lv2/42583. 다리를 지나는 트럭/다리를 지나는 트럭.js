function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge = new Array(bridge_length).fill(0);
    let bridgeWeight = 0;
    let waitingTrucks = truck_weights.slice();

    while (waitingTrucks.length > 0 || bridgeWeight > 0) {
        if (bridge[0] > 0) {
            bridgeWeight -= bridge[0];
            bridge.shift();
        } else {
            bridge.shift();
        }

        if (waitingTrucks.length > 0 && bridgeWeight + waitingTrucks[0] <= weight) {
            bridge.push(waitingTrucks[0]);
            bridgeWeight += waitingTrucks[0];
            waitingTrucks.shift();
        } else {
            bridge.push(0);
        }

        answer++;
    }

    return answer;
}