import { input } from "./input";
import { sumArray, countValuesIntoString } from "utils";

const D6P2 = (input) =>
  sumArray(
    input
      .split("\n\n")
      .map((a) => a.split(/\n/))
      .reduce(
        (acc, a) => [
          ...acc,
          Object.values(countValuesIntoString(a.join(""))).filter(
            (v) => v === a.length
          ).length,
        ],
        []
      )
  );

export default D6P2(input);
