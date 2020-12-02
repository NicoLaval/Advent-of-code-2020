/**
 * @param input
 * @returns [{inf: int, sup: int, letter: string, pwd: string}]
 */
export const d2Extractor = (input) =>
  input.split("\n").map((b) => {
    const rx = /([^\s}]+)-([^\s}]+)\s([^\s}]):\s([^\s}]+)/g;
    const [inf, sup, letter, pwd] = rx.exec(b).splice(1);
    return {
      inf,
      sup,
      letter,
      pwd,
    };
  });
