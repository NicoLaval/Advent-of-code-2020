import { input } from "./input";

const lcm = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return !x || !y ? 0 : Math.abs((x * y) / gcd(x, y));
};

const gcd = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const D13P2 = (input) => {
  const a = input.split("\n");
  const bus = a[1]
    .split(",")
    .reduce(
      (acc, b, i) => (b !== "x" ? [...acc, [parseInt(b, 10), i]] : acc),
      []
    );
  let t = 0;
  let step = 1;
  for (let i = 0; i < bus.length; i++) {
    while ((t + bus[i][1]) % bus[i][0] !== 0) {
      t += +step;
    }
    step = lcm(step, bus[i][0]);
  }
  return t;
};

export default D13P2(input);
