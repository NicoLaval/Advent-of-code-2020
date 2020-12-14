import { input } from "./input";
import { sumArray } from "utils";

const D14P1 = (input) => {
  const a = input
    .split("mask = ")
    .splice(1)
    .map((i) => i.split("\n"))
    .flat()
    .filter((s) => s !== "");
  let mask,
    mem,
    acc = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith("mem")) {
      const rx = /mem\[([^\s}]+)\] = ([^\s}]+)/g;
      mem = rx.exec(a[i]).splice(1);
      const init = parseInt(mem[1], 10).toString(2);
      const completeInit = "0".repeat(mask.length - init.length) + init;
      const after = completeInit
        .split("")
        .map((v, i) => (mask[i] === "X" ? v : mask[i]))
        .join("");
      acc = { ...acc, [mem[0]]: parseInt(after, 2) };
    } else mask = a[i];
  }
  return sumArray(Object.values(acc));
};

export default D14P1(input);
