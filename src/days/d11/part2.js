import { input } from "./input";
import { resolve } from "./common";

const countNeighbour = (array, i, j) => {
  const directions = [
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];
  let seated = 0;
  for (let d = 0; d < directions.length; d++) {
    const [initK, initL] = directions[d];
    let k = initK,
      l = initL,
      index = 1;
    while (
      array[k + i] &&
      array[k + i][l + j] &&
      !["#", "L"].includes(array[k + i][l + j])
    ) {
      index++;
      k = initK * index;
      l = initL * index;
    }
    if (array[k + i] && array[k + i][l + j]) {
      if (array[k + i][l + j] === "#") seated++;
    }
  }

  return seated;
};

const D11P2 = (input) => resolve(input, 5, countNeighbour);

export default D11P2(input);
