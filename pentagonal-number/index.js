function PentagonalNumber(num) {
  if (num <= 1) {
    return 1;
  } else {
    const dots = 5 * (num - 1);
    return dots + PentagonalNumber(num - 1);
  }
}

// keep this function call here
PentagonalNumber(3);
