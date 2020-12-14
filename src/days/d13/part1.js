import { input } from "./input";

const D13P1 = (input) => {
  const a = input.split("\n");
  const time = parseInt(a[0]);
  const bus = a[1]
    .split(",")
    .filter((i) => i !== "x")
    .map((i) => parseInt(i, 10));
  const b = bus.map((bb) => {
    let i = 1;
    while (i * bb < time) {
      i++;
    }
    return i * bb;
  });
  const min = Math.min(...b);
  const index = b.indexOf(min);
  return bus[index] * (min - time);
};

export default D13P1(input);
