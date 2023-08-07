function solution(n, lost, reserve) {
    const students = new Array(n).fill(1);
    
    for (const l of lost) {
        students[l - 1] -= 1;
    }
    
    for (const r of reserve) {
        students[r - 1] += 1;
    }
    
    for (let i = 0; i < n; i++) {
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i] = 1;
                students[i - 1] = 1;
            } else if (students[i + 1] === 2) {
                students[i] = 1;
                students[i + 1] = 1;
            }
        }
    }
    
    return students.filter((s) => s >= 1).length;
}