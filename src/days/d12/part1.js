import { input } from "./input";
import { positiveMod } from "utils";

const D12P1 = (input) => {
  const orientations = ["N", "E", "S", "W"];
  const coords = input
    .split("\n")
    .map((i) => [i.substring(0, 1), parseInt(i.substring(1, i.length), 10)])
    .reduce(
      (acc, [kind, nb]) => {
        const { NS, EW, current } = acc;
        if (kind === "F") {
          if (current === "E") return { ...acc, EW: EW + nb };
          if (current === "W") return { ...acc, EW: EW - nb };
          if (current === "N") return { ...acc, NS: NS + nb };
          if (current === "S") return { ...acc, NS: NS - nb };
        }
        if (kind === "E") return { ...acc, EW: EW + nb };
        if (kind === "W") return { ...acc, EW: EW - nb };
        if (kind === "N") return { ...acc, NS: NS + nb };
        if (kind === "S") return { ...acc, NS: NS - nb };
        if (kind === "L") {
          const index = orientations.indexOf(current);
          const newCurrent =
            orientations[positiveMod(index - nb / 90, orientations.length)];
          return { ...acc, current: newCurrent };
        }
        if (kind === "R") {
          const index = orientations.indexOf(current);
          const newCurrent =
            orientations[positiveMod(index + nb / 90, orientations.length)];
          return { ...acc, current: newCurrent };
        }
        return acc;
      },
      { NS: 0, EW: 0, current: "E" }
    );
  const { NS, EW } = coords;
  return Math.abs(NS) + Math.abs(EW);
};

export default D12P1(input);
