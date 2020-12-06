export const countValuesIntoString = (string) =>
  string.split("").reduce(
    (acc, s) => ({
      ...acc,
      [s]: acc[s] + 1 || 1,
    }),
    {}
  );
