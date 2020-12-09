export const buildTree = (input) => {
  const cleanedInput = input
    .replace(/bags|bag|\.| /g, "")
    .split("\n")
    .filter((l) => !l.includes("noother"))
    .map((l) => l.split("contain"))
    .reduce(
      (acc, [a, b]) => ({
        ...acc,
        [a]: b
          .split(",")
          .reduce(
            (acc1, c) => ({ ...acc1, [c.substring(1)]: parseInt(c[0], 10) }),
            {}
          ),
      }),
      {}
    );

  const buildChildren = (init) => (parents) =>
    Object.entries(parents).reduce((acc, [key, weighting]) => {
      if (key === "shinygold" || !init[key] || init[key].length === 0)
        return [...acc, { [key]: (acc[key] || 0) + weighting }];
      const children = Object.entries(init[key]).reduce(
        (chi, [chiKey, chiWeighting]) => ({
          ...chi,
          [chiKey]: chiWeighting * weighting,
          [`_${key}`]: (acc[`_${key}`] || 0) + weighting,
        }),
        {}
      );
      return [...acc, ...buildChildren(init)(children)];
    }, []);

  const objWithChildren = (obj) =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      return { ...acc, [key]: buildChildren(obj)(value) };
    }, {});

  const getColor = (color) =>
    color.reduce((acc1, o) => {
      const [k, v] = Object.entries(o)[0];
      return { ...acc1, [k]: v + (acc1[k] || 0) };
    }, {});

  return Object.entries(objWithChildren(cleanedInput)).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: getColor(v) }),
    {}
  );
};
