import { input } from "./input";
import { toIntArray } from "utils";

const D1P1 = (input) =>
  toIntArray(input).reduce((acc, v, _, array) => {
    if (acc) return acc;
    const k = array.find((a) => 2020 === v + a);
    return k ? v * k : acc;
  }, 0);

export default D1P1(input);
