import { input } from "./input";
import { resolve } from "./common";

const countNeighbour = (array, i, j) => {
  let seated = 0;
  for (let k = -1; k <= 1; k++) {
    for (let l = -1; l <= 1; l++) {
      if ((k !== 0 || l !== 0) && array[k + i] && array[k + i][l + j] === "#") {
        seated++;
      }
    }
  }
  return seated;
};

const D11P1 = (input) => resolve(input, 4, countNeighbour);

export default D11P1(input);
