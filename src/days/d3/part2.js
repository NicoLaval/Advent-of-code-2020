import { input } from "./input";
import { countTree } from "utils";

const D3P2 = (input) =>
  countTree({ right: 1 })(input) *
  countTree({ right: 3 })(input) *
  countTree({ right: 5 })(input) *
  countTree({ right: 7 })(input) *
  countTree({ right: 1, down: 2 })(input);

export default D3P2(input);
