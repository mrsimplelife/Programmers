function solution(files) {
  const compareFiles = (a, b) => {
    const regex = /(\D+)(\d+)(.*)/i;
    const [_, aHead, aNumber, aTail] = a.match(regex);
    const [__, bHead, bNumber, bTail] = b.match(regex);

    const compareHead = aHead.toLowerCase().localeCompare(bHead.toLowerCase());
    const compareNumber = parseInt(aNumber) - parseInt(bNumber);

    return compareHead !== 0 ? compareHead : compareNumber;
  };

  return files.sort(compareFiles);
}

