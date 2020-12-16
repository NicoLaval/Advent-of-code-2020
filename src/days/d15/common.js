export const buildD15 = (input) => (sup) => {
  const array = input.split(",").map((i) => parseInt(i, 10));
  const acc = new Map();
  let res;
  for (let i = 1; i < array.length + 1; i++) {
    acc.set(array[i - 1], [i]);
    res = array[i - 1];
  }
  for (let i = array.length + 1; i <= sup; i++) {
    const values = acc.get(res) || [];
    if (values.length > 1)
      res = values[values.length - 1] - values[values.length - 2];
    else res = 0;
    acc.set(res, [...(acc.get(res) || []), i].slice(-2));
  }
  return res;
};
