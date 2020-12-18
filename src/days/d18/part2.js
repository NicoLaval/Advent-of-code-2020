import { input } from "./input";
import { sumArray } from "utils";
import { getRes } from "./common";

const resolver = (res) => {
  while (res.includes("+")) {
    const rxOp = /([0-9]+)\+([0-9]+)/g;
    const toReplaceOp = rxOp.exec(res);
    res = res.replace(toReplaceOp[0], eval(toReplaceOp[0]));
  }
  while (res.includes("*")) {
    const rxOp = /([0-9]+)\*([0-9]+)/g;
    const toReplaceOp = rxOp.exec(res);
    res = res.replace(toReplaceOp[0], eval(toReplaceOp[0]));
  }
  return res;
};

const D18P2 = (input) =>
  sumArray(input.split("\n").map((l) => getRes(l, resolver)));

export default D18P2(input);
