import { input } from "./input";

const getNeighbors = (obj) => {
  const { xMin, xMax, yMin, yMax, zMin, zMax, wMin, wMax } = Object.keys(
    obj
  ).reduce(
    (acc, k) => {
      const [xC, yC, zC, wC] = k.split("|").map((i) => parseInt(i, 10));
      const { xMin, xMax, yMin, yMax, zMin, zMax, wMin, wMax } = acc;
      return {
        xMin: xC < xMin ? xC : xMin,
        xMax: xC > xMax ? xC : xMax,
        yMin: yC < yMin ? yC : yMin,
        yMax: yC > yMax ? yC : yMax,
        zMin: zC < zMin ? zC : zMin,
        zMax: zC > zMax ? zC : zMax,
        wMin: wC < wMin ? wC : wMin,
        wMax: wC > wMax ? wC : wMax,
      };
    },
    {
      xMin: 0,
      xMax: 0,
      yMin: 0,
      yMax: 0,
      zMin: 0,
      zMax: 0,
      wMin: 0,
      wMax: 0,
    }
  );
  let neighbors = {};
  for (let x = xMin - 1; x < xMax + 2; x++) {
    for (let y = yMin - 1; y < yMax + 2; y++) {
      for (let z = zMin - 1; z < zMax + 2; z++) {
        for (let w = wMin - 1; w < wMax + 2; w++) {
          neighbors = { ...neighbors, [`${x}|${y}|${z}|${w}`]: 0 };
        }
      }
    }
  }
  return neighbors;
};

const getNextCell = (position) => (obj) => {
  let count = 0;
  const [x, y, z, w] = position.split("|").map((i) => parseInt(i, 10));
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          if (
            (i === 0 && j === 0 && k === 0 && l === 0) ||
            !obj[`${i + x}|${j + y}|${k + z}|${w + l}`]
          )
            continue;
          count++;
          if (count > 3) return 0;
        }
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

const D17P2 = (input) => {
  let init = {};
  input
    .split("\n")
    .map((i) => i.split("").map((c) => (c === "#" ? 1 : 0)))
    .forEach((line, y) => {
      line.forEach((cell, x) => {
        if (cell) init = { ...init, [`${x}|${y}|0|0`]: cell };
      });
    });

  // let res = init;
  // for (let i = 0; i < 6; i++) {
  //   res = getNext(res);
  //   console.log(i);
  // }
  // return Object.values(res).length;
  return "Too long";
};

export default D17P2(input);
