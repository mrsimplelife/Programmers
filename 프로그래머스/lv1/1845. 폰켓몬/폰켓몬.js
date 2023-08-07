function solution(nums) {
    const maxCount = nums.length / 2;
    const set = new Set(nums);
    const uniqueCount = set.size;
    
    if (uniqueCount <= maxCount) {
        return uniqueCount;
    } else {
        return maxCount;
    }
}