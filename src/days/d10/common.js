export const buildInput = (input) =>
  input
    .split("\n")
    .map((e) => parseInt(e, 10))
    .sort((a, b) => a - b);
