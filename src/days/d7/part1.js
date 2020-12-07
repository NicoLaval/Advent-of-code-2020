import { input } from "./input";
import { buildTree } from "./common";

const D7P1 = (input) =>
  Object.values(buildTree(input)).filter((v) => v["shinygold"]).length;

export default D7P1(input);
