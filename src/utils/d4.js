export const getPasseports = (input) =>
  input.split("\n\n").map((p) =>
    p.split(/:|\n| /).reduce((acc, current, index, array) => {
      if (index % 2 === 0 && current !== "cid")
        return { ...acc, [current]: array[index + 1] };
      return acc;
    }, {})
  );
