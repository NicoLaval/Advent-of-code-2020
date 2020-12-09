import { input } from "./input";

const D9P1 = (input) => {
  const array = input.split("\n").map((n) => parseInt(n, 10));
  const res = array.reduce((acc, _, index, a) => {
    if (acc) return acc;
    let sums = [];
    for (let i = index; i < index + 25; i++) {
      for (let j = index; j < index + 25; j++) {
        if (i !== j) {
          sums = [...sums, a[i] + a[j]];
        }
      }
    }
    if (sums.includes(a[index + 25])) return 0;
    return a[index + 25];
  }, 0);
  return res;
};

export default D9P1(input);
