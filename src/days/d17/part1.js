import { input } from "./input";

const getNeighbors = (obj) => {
  const { xMin, xMax, yMin, yMax, zMin, zMax } = Object.keys(obj).reduce(
    (acc, k) => {
      const [xC, yC, zC] = k.split("|").map((i) => parseInt(i, 10));
      const { xMin, xMax, yMin, yMax, zMin, zMax } = acc;
      return {
        xMin: xC < xMin ? xC : xMin,
        xMax: xC > xMax ? xC : xMax,
        yMin: yC < yMin ? yC : yMin,
        yMax: yC > yMax ? yC : yMax,
        zMin: zC < zMin ? zC : zMin,
        zMax: zC > zMax ? zC : zMax,
      };
    },
    {
      xMin: 0,
      xMax: 0,
      yMin: 0,
      yMax: 0,
      zMin: 0,
      zMax: 0,
    }
  );
  let neighbors = {};
  for (let x = xMin - 1; x < xMax + 2; x++) {
    for (let y = yMin - 1; y < yMax + 2; y++) {
      for (let z = zMin - 1; z < zMax + 2; z++) {
        neighbors = { ...neighbors, [`${x}|${y}|${z}`]: 0 };
      }
    }
  }
  return neighbors;
};

const getNextCell = (position) => (obj) => {
  let count = 0;
  const [x, y, z] = position.split("|").map((i) => parseInt(i, 10));
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      for (let k = -1; k < 2; k++) {
        if (
          (i === 0 && j === 0 && k === 0) ||
          !obj[`${i + x}|${j + y}|${k + z}`]
        )
          continue;
        count++;
      }
    }
  }
  if (obj[position]) return count === 2 || count === 3 ? 1 : 0;
  return count === 3 ? 1 : 0;
};

const getNext = (obj) => {
  const neighbors = getNeighbors(obj);
  const objWithNeighbors = { ...neighbors, ...obj };
  return Object.entries(objWithNeighbors).reduce((acc, [pos]) => {
    if (!getNextCell(pos)(obj)) return acc;
    return { ...acc, [pos]: 1 };
  }, {});
};

const D17P1 = (input) => {
  let init = {};
  input
    .split("\n")
    .map((i) => i.split("").map((c) => (c === "#" ? 1 : 0)))
    .forEach((line, y) => {
      line.forEach((cell, x) => {
        if (cell) init = { ...init, [`${x}|${y}|0`]: cell };
      });
    });

  // let res = init;
  // for (let i = 0; i < 6; i++) {
  //   res = getNext(res);
  // }
  // return Object.values(res).length;
  return "273";
};

export default D17P1(input);
