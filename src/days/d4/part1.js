import { input } from "./input";
import { getPasseports } from "utils";

const D4P1 = (input) =>
  getPasseports(input).filter((p) => Object.keys(p).length === 7).length;

export default D4P1(input);
