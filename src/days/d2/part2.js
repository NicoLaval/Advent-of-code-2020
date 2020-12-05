import { input } from "./input";
import { d2Extractor } from "./common";

const D2P2 = (input) =>
  d2Extractor(input).filter(({ inf, sup, letter, pwd }) => {
    return (pwd[inf - 1] === letter) ^ (pwd[sup - 1] === letter);
  }).length;

export default D2P2(input);
