function solution(n, arr1, arr2) {
  const decryptedMap = [];

  for (let i = 0; i < n; i++) {
    const binary1 = arr1[i].toString(2).padStart(n, '0');
    const binary2 = arr2[i].toString(2).padStart(n, '0');
    const combinedBinary = (parseInt(binary1, 2) | parseInt(binary2, 2)).toString(2).padStart(n, '0');
    
    const row = combinedBinary.replace(/1/g, '#').replace(/0/g, ' ');
    decryptedMap.push(row);
  }

  return decryptedMap;
}