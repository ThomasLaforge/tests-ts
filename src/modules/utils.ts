export function createEmptyArray(size: number) {
  return new Array(size).fill("");
}

export function explodeOneNumber(numA: number) {
  let copy = numA;
  let array = [];

  while (copy !== 0) {
    array.push(copy % 10);
    copy = Math.floor(copy / 10);
  }

  return array;
}

export function explodeNumbers(numA: number, numB: number) {
  const explodesA = explodeOneNumber(numA);
  const explodesB = explodeOneNumber(numB);
  const aIsLonger = explodesA.length > explodesB.length;

  const longestArr = aIsLonger ? explodesA : explodesB;
  const other = aIsLonger ? explodesB : explodesA;

  return longestArr
    .reduce((acc: number[][], val, i) => [...acc, [val, other[i] || 0]], [])
    .map((e) => (aIsLonger ? e : e.reverse()));
}
