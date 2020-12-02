import { input } from "./input";
import { d2Extractor } from "utils";

const D2P2 = (input) =>
  d2Extractor(input).reduce((acc, { inf, sup, letter, pwd }) => {
    if ((pwd[inf - 1] === letter) ^ (pwd[sup - 1] === letter)) return acc + 1;
    return acc;
  }, 0);

export default D2P2(input);
