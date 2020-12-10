import { input } from "./input";
import { buildInput } from "./common";

const D10P1 = (input) => {
  const obs = [0, ...buildInput(input)].reduce((acc, current, i, array) => {
    if (!array[i + 1]) return { ...acc, 3: acc[3] + 1 };
    const diff = array[i + 1] - current;
    return { ...acc, [diff]: (acc[diff] || 0) + 1 };
  }, {});
  return obs[1] * obs[3];
};

export default D10P1(input);
