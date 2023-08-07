function solution(str1,str2){
    return  calculateJaccardSimilarity(str1, str2);
}
function createMultiSet(str) {
  const multiSet = [];
  
  for (let i = 0; i < str.length - 1; i++) {
    const element = str.substr(i, 2).toLowerCase();
    
    const validPattern = /^[a-z]+$/;
    if (validPattern.test(element)) {
      multiSet.push(element);
    }
  }
  
  return multiSet;
}

function calculateJaccardSimilarity(str1, str2) {
  const multiSet1 = createMultiSet(str1);
  const multiSet2 = createMultiSet(str2);
  
  const count1 = {};
  const count2 = {};
  
  for (const element of multiSet1) {
    count1[element] = (count1[element] || 0) + 1;
  }
  
  for (const element of multiSet2) {
    count2[element] = (count2[element] || 0) + 1;
  }
  
  let intersectionSize = 0;
  let unionSize = 0;
  
  for (const element in count1) {
    if (count2[element] !== undefined) {
      intersectionSize += Math.min(count1[element], count2[element]);
      unionSize += Math.max(count1[element], count2[element]);
      delete count2[element];
    } else {
      unionSize += count1[element];
    }
  }
  
  for (const element in count2) {
    unionSize += count2[element];
  }
  
  if (unionSize === 0) {
    return 65536;
  }
  
  const similarity = Math.floor((intersectionSize / unionSize) * 65536);
  return similarity;
}
