import { input } from "./input";
import D9P1 from "./part1";
import { sumArray } from "utils";

const D9P2 = (input) => {
  const array = input.split("\n").map((n) => parseInt(n, 10));
  for (let index = 0; index < array.length; index++) {
    let numbers = [];
    let steps = 0;
    while (sumArray(numbers) < D9P1) {
      numbers = [...numbers, array[index + steps]];
      steps++;
    }
    if (sumArray(numbers) === D9P1) {
      const sorted = numbers.sort((a, b) => a - b);
      return sorted[0] + sorted[sorted.length - 1];
    }
  }
  return "error";
};

export default D9P2(input);
