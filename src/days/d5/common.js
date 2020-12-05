export const getSortedSeatIds = (input) =>
  input
    .replace(/F|L/g, "0")
    .replace(/B|R/g, "1")
    .split("\n")
    .map(
      (i) => 8 * parseInt(i.substring(0, 7), 2) + parseInt(i.substring(7), 2)
    )
    .sort((a, b) => a - b);
