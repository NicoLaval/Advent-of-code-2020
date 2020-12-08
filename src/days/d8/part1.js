import { input } from "./input";

const D8P1 = (input) => {
  const array = input.split("\n");
  let memory = {};
  let index = 0;
  let acc = 0;
  while (!memory[index]) {
    memory = { ...memory, [index]: "ok" };
    if (array[index].startsWith("acc")) {
      acc = acc + parseInt(array[index].substring(4));
      index++;
    } else if (array[index].startsWith("nop")) {
      index++;
    } else if (array[index].startsWith("jmp")) {
      index += parseInt(array[index].substring(4));
    }
  }
  return acc;
};

export default D8P1(input);
