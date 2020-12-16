import { input } from "./input";
import { transpose } from "utils";

const getValid = (rules) => (nearby) => {
  const allRules = Object.values(rules).reduce(
    (acc, r) => new Set([...acc, ...new Set(r)]),
    new Set()
  );
  return nearby.reduce((acc, n) => {
    if (n.filter((nb) => !allRules.has(nb)).length !== 0) return acc;
    return [...acc, n];
  }, []);
};

const D16P2 = (input) => {
  const array = input.split("\n\n");
  const rules = array[0].split("\n").reduce((acc, r) => {
    const [name, values] = r.split(": ");
    return {
      ...acc,
      [name]: values.split(" or ").reduce((acc1, sr) => {
        const [inf, sup] = sr.split("-").map((n) => parseInt(n, 10));
        const subArray = [...Array(sup - inf + 1).keys()].map((i) => i + inf);
        return new Set([...acc1, ...new Set(subArray)]);
      }, new Set()),
    };
  }, {});

  const nearby = array[2]
    .split("\n")
    .slice(1)
    .map((n) => n.split(",").map((nb) => parseInt(nb, 10)));

  const validNearby = getValid(rules)(nearby);

  const transposedValidNearby = transpose(validNearby);

  const availableCols = Object.entries(rules)
    .reduce((acc, [name, set]) => {
      const indexes = transposedValidNearby.reduce((acc1, line, i) => {
        if (line.filter((n) => !set.has(n)).length === 0) return [...acc1, i];
        return acc1;
      }, []);
      return [...acc, [name, indexes]];
    }, [])
    .sort((a, b) => a[1].length - b[1].length);

  const cols = availableCols.reduce((acc, [name, cols]) => {
    return {
      ...acc,
      [name]: cols.find((c) => !Object.values(acc).includes(c)),
    };
  }, {});

  const departureCols = Object.entries(cols).reduce((acc, [name, index]) => {
    if (name.startsWith("departure")) return [...acc, index];
    return acc;
  }, []);

  const ticket = array[1]
    .split(/\n|,/)
    .slice(1)
    .map((n) => parseInt(n, 10));

  return departureCols.reduce((acc, col) => acc * ticket[col], 1);
};

export default D16P2(input);
