import { input } from "./input";

const D8P2 = (input) => {
  const array = input.split("\n");
  const getRes = (from, to) =>
    array.reduce((res, _, i) => {
      let memory = {};
      let index = 0;
      let acc = 0;
      let finish = false;
      let b = array.map((a, j) => (i === j ? a.replace(from, to) : a));
      while (!memory[index]) {
        memory = { ...memory, [index]: "ok" };
        if (index > b.length - 1) {
          finish = true;
          break;
        } else if (b[index].startsWith("acc")) {
          acc = acc + parseInt(b[index].substring(4));
          index++;
        } else if (b[index].startsWith("nop")) {
          index++;
        } else if (b[index].startsWith("jmp")) {
          index += parseInt(b[index].substring(4));
        }
      }
      return { ...res, [acc]: finish };
    }, {});
  const results = { ...getRes("jmp", "nop"), ...getRes("nop", "jmp") };
  return Object.entries(results).find(([_, v]) => v)[0];
};

export default D8P2(input);
