function solution(s) {
    let count1 = 0;
    let count2 = 0;
    
    while (s !== "1") {
        count2 += [...s].reduce((p, c) => (c === "0" ? p + 1 : p), 0);
        s = s.replace(/0/g, "");
        s = s.length.toString(2);
        count1++;
    }
    
    return [count1, count2];
}