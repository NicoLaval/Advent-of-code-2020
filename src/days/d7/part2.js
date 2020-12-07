import { input } from "./input";
import { buildTree } from "./common";
import { sumArray } from "utils";

const D7P1 = (input) => sumArray(Object.values(buildTree(input).shinygold));

export default D7P1(input);
