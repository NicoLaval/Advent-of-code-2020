import { input } from "./input";
import { toIntArray } from "utils";

const D1P2 = (input) =>
  toIntArray(input).reduce((acc, v, _, array) => {
    if (acc) return acc;
    const k = array.reduce((acc1, v1, _, array1) => {
      if (acc1) return acc1;
      const k1 = array1.find((a) => 2020 === v + v1 + a);
      return k1 ? v1 * k1 : acc1;
    }, 0);
    return k ? v * k : acc;
  }, 0);

export default D1P2(input);
