import { input } from "./input";
import { d2Extractor } from "utils";

const D2P1 = (input) =>
  d2Extractor(input).reduce((acc, { inf, sup, letter, pwd }) => {
    const count = pwd.split("").filter((p) => p === letter).length;
    if (inf <= count && count <= sup) return acc + 1;
    return acc;
  }, 0);

export default D2P1(input);
