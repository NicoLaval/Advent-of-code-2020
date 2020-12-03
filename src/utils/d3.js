export const countTree = (params) => (input) => {
  const { right, down = 1 } = params;
  return input.split("\n").reduce((acc, v, i) => {
    const isTree =
      (i % down === 0 && v[((i / down) * right) % v.length]) === "#";
    if (isTree) return acc + 1;
    return acc;
  }, 0);
};
