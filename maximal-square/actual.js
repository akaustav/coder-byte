const sum = arr => {
  let s = 0;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
      s += arr[i][j];
    }
  }
  return s;
};

const isPerfectSquare = arr => {
  return Math.pow(arr.length, 2) === sum(arr);
};

const genSquareSubMatrix = (arr, size) => {
  const result = [];
  const rows = arr.length;
  const cols = arr[0].length;
  const maxSize = rows <= cols ? rows : cols;

  if (size <= maxSize) {
    for (let r = 0; r <= arr.length - size; ++r) {
      for (let c = 0; c <= arr[r].length - size; ++c) {
        // if (arr[r][c] === 1) {
        const val = [];
        for (let s = 0; s < size; ++s) {
          val.push(arr[r + s].slice(c, c + size));
        }
        result.push(val);
        // }
      }
    }
  }

  return result;
};

function MaximalSquare(strArr) {
  let output = 0;

  const arr = strArr.map(val => {
    return val.split('').map(v => Number.parseInt(v, 10));
  });

  const rows = arr.length;
  const cols = arr[0].length;
  const maxSize = rows <= cols ? rows : cols;

  for (let i = maxSize, found = false; i > 0 && !found; --i) {
    const subMatrices = genSquareSubMatrix(arr, i);

    for (let j = 0; j < subMatrices.length; ++j) {
      if (isPerfectSquare(subMatrices[j])) {
        output = Math.pow(i, 2);
        found = true;
        break;
      }
    }
  }

  return output;
}
   
// keep this function call here 
MaximalSquare(readline());