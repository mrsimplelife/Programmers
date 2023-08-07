function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}


function solution(arr) {
  let lcmValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    lcmValue = lcm(lcmValue, arr[i]);
  }

  return lcmValue;
}