import { input } from "./input";

const D12P2 = (input) => {
  const coords = input
    .split("\n")
    .map((i) => [i.substring(0, 1), parseInt(i.substring(1, i.length), 10)])
    .reduce(
      (acc, [kind, nb]) => {
        const { ship, waypoint } = acc;
        const { NS, EW } = ship;
        const { NS: NS_W, EW: EW_W } = waypoint;
        if (kind === "F")
          return {
            waypoint,
            ship: { EW: EW + nb * EW_W, NS: NS + nb * NS_W },
          };
        if (kind === "E")
          return { ship, waypoint: { ...waypoint, EW: EW_W + nb } };
        if (kind === "W")
          return { ship, waypoint: { ...waypoint, EW: EW_W - nb } };
        if (kind === "N")
          return { ship, waypoint: { ...waypoint, NS: NS_W + nb } };
        if (kind === "S")
          return { ship, waypoint: { ...waypoint, NS: NS_W - nb } };
        if ((kind === "L" && nb === 90) || (kind === "R" && nb === 270))
          return { ship, waypoint: { NS: EW_W, EW: -NS_W } };
        if ((kind === "L" && nb === 180) || (kind === "R" && nb === 180))
          return { ship, waypoint: { NS: -NS_W, EW: -EW_W } };
        if ((kind === "L" && nb === 270) || (kind === "R" && nb === 90))
          return { ship, waypoint: { NS: -EW_W, EW: NS_W } };
        return acc;
      },
      {
        ship: { NS: 0, EW: 0 },
        waypoint: { NS: 1, EW: 10 },
      }
    );
  const {
    ship: { NS, EW },
  } = coords;
  return Math.abs(NS) + Math.abs(EW);
};

export default D12P2(input);
