// In a series of numbers, each number represents even number of times except one number which repeats odd number of times
// Find that number which repeats odd number of times
// {
//   0: 2,
//   1: 3,
//   4: 2,
//   5: 2,
//   7: 2
// }

const a = [0, 0, 1, 1, 4, 5, 4, 5, 7, 7, 1];
const obj = {};
for (let i = 0; i < a.length; ++i) {
  val = a[i];
  if (obj[val] > 0) {
    obj[val]++;
  } else {
    obj[val] = 1;
  }
}
