const compare = (array1, array2) =>
  array1.map((a) => a.join("")).join("") ===
  array2.map((a) => a.join("")).join("");

export const resolve = (input, tolerance, countFunction) => {
  let previous = input.split("\n").map((e) => e.split(""));
  let current = [];
  while (true) {
    current = previous.map((row, i, array) =>
      row.map((c, j) => {
        if (c === "L") {
          return countFunction(array, i, j) === 0 ? "#" : "L";
        } else if (c === "#") {
          return countFunction(array, i, j) >= tolerance ? "L" : "#";
        }
        return ".";
      })
    );
    if (compare(previous, current)) break;
    else previous = current;
  }
  return current.join().match(/#/g).length;
};
