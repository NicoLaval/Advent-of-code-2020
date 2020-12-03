import { input } from "./input";
import { countTree } from "utils";

const D3P1 = (input) => countTree({ right: 3 })(input);

export default D3P1(input);
