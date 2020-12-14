import { input } from "./input";
import { sumArray } from "utils";

const getAfters = (after) => {
  const nbX = after.split("").filter((a) => a === "X").length;
  let acc = [];
  for (let i = 0; i < Math.pow(2, nbX); i++) {
    const b = i.toString(2);
    acc = [...acc, "0".repeat(nbX - b.length) + b];
  }
  let afters = [];
  for (let i = 0; i < acc.length; i++) {
    let current = after;
    for (let j = 0; j < acc[i].length; j++) {
      current = current.replace("X", acc[i][j]);
    }
    afters = [...afters, current];
  }
  return afters.map((a) => parseInt(a, 2));
};

const D14P2 = (input) => {
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
      const init = parseInt(mem[0], 10).toString(2);
      const completeInit = "0".repeat(mask.length - init.length) + init;
      const after = completeInit
        .split("")
        .map((v, i) => {
          if (mask[i] === "0") return v;
          else if (mask[i] === "1") return "1";
          else return "X";
        })
        .join("");
      const afters = getAfters(after);
      const newAcc = afters.reduce(
        (acc, v) => ({ ...acc, [v]: parseInt(mem[1], 10) }),
        {}
      );
      acc = { ...acc, ...newAcc };
    } else mask = a[i];
  }
  return sumArray(Object.values(acc));
  //return "ok";
};

export default D14P2(input);
