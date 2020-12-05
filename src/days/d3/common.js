export const countTree = (params) => (input) => {
  const { right, down = 1 } = params;
  return input
    .split("\n")
    .filter(
      (v, i) => (i % down === 0 && v[((i / down) * right) % v.length]) === "#"
    ).length;
};
