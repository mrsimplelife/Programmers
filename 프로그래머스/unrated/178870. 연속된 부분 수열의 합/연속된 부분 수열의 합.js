function solution(sequence, k) {
    let start = 0;
    let sum = 0;
    let result = [0, sequence.length - 1];
    
    for (let end = 0; end < sequence.length; end++) {
        sum += sequence[end];
        while (sum > k) {
            sum -= sequence[start];
            start++;
        }
        if (sum === k) {
            const diff = end - start
            if (diff === 0){
                return [start, end];
            }
            if (result[1] - result[0] > diff) {
                result = [start, end];
            }
        }
    }

    return result;
}
