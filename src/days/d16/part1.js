import { input } from "./input";

const D16P1 = (input) => {
  const array = input.split("\n\n");
  const rules = array[0]
    .split("\n")
    .map((r) => r.split(": ")[1].split(" or ").flat())
    .flat()
    .reduce((acc, r) => {
      const [inf, sup] = r.split("-").map((n) => parseInt(n, 10));
      const subArray = [...Array(sup - inf + 1).keys()].map((i) => i + inf);
      return new Set([...acc, ...new Set(subArray)]);
    }, new Set());
  const nearby = array[2]
    .split(/\n|,/)
    .slice(1)
    .map((n) => parseInt(n, 10));
  return nearby.reduce((acc, n) => {
    if (!rules.has(n)) return acc + n;
    return acc;
  }, 0);
};

export default D16P1(input);
