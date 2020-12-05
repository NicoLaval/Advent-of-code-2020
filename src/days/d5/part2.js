import { input } from "./input";
import { getSortedSeatIds } from "./common";

const D5P1 = (input) =>
  getSortedSeatIds(input).find((s, i, array) => array[i + 1] === s + 2) + 1;

export default D5P1(input);
