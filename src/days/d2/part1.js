import { input } from "./input";
import { d2Extractor } from "./common";

const D2P1 = (input) =>
  d2Extractor(input).filter(({ inf, sup, letter, pwd }) => {
    const count = pwd.split("").filter((p) => p === letter).length;
    return inf <= count && count <= sup;
  }).length;

export default D2P1(input);
