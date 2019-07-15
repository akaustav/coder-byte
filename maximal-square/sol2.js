const input = ['0111', '1111', '1111', '1111'];

function MaximalSquare(strArr) {
  let fullArray = strArr.map(val => val.split(''));

  let initArray = initialEval(fullArray);

  if (initArray.length === 0) {
    return 0;
  }
  let count = 1;

  while (initArray.length) {
    initArray = initArray.filter(val => {
      return testOne(fullArray, count + 1, val[0], val[1]);
    });
    count++;
    if (count > 10) break;
  }
  return Math.pow(count - 1, 2);
}

function initialEval(arr) {
  let initArray = [];
  arr.forEach((row, rowNum) => {
    row.forEach((val, colNum) => {
      if (val === '1') {
        initArray.push([rowNum, colNum]);
      }
    });
  });
  return initArray;
}

function testOne(arr, size, r, c) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (!arr[r + i] || !arr[r + i][c + j] || arr[r + i][c + j] !== '1') {
        return false;
      }
    }
  }
  return true;
}

// keep this function call here
console.log(MaximalSquare(input));
