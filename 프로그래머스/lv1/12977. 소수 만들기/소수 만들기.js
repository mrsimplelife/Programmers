function solution(nums) {
    return sumOfThreeNumbers(nums).reduce((p,c)=>isPrime(c) ? p + 1 : p,0)
}
function sumOfThreeNumbers(nums) {
  const n = nums.length;
  const result = [];
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    for (let j = i + 1; j < n - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      
      for (let k = j + 1; k < n; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }
        
        const sum = nums[i] + nums[j] + nums[k];
        result.push(sum);
      }
    }
  }
  
  return result;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
