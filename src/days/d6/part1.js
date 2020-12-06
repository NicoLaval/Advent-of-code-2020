import { input } from "./input";
import { sumArray } from "utils";

const D6P1 = (input) =>
  sumArray(input.split("\n\n").map((a) => [...new Set(a.split(/\n|/))].length));

export default D6P1(input);
