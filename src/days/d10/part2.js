import { input } from "./input";
import { buildInput } from "./common";

const D10P2 = (input) => {
  const deletable = buildInput(input).reduce((acc, current, i, array) => {
    if (!array[i + 1]) return acc;
    if (array[i + 1] - (array[i - 1] || 0) <= 3) return [...acc, current];
    return acc;
  }, []);
  const capabilities = { 1: 2, 2: 4, 3: 7 };
  return deletable.reduce(
    (acc, _, i, array) => {
      const { arranges, following } = acc;
      if (!array[i + 1] || array[i] + 1 !== array[i + 1])
        return {
          arranges: arranges * capabilities[following + 1],
          following: 0,
        };
      return { arranges, following: following + 1 };
    },
    { arranges: 1, following: 0 }
  ).arranges;
};

export default D10P2(input);
