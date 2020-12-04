import { input } from "./input";
import { getPasseports } from "utils";

const isPasseportValid = (obj) => {
  if (Object.keys(obj).length !== 7) return false;
  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = obj;
  const byrInt = parseInt(byr, 10);
  const iyrInt = parseInt(iyr, 10);
  const eyrInt = parseInt(eyr, 10);
  const hgtInt = parseInt(hgt, 10);
  return (
    byrInt > 1919 &&
    byrInt < 2003 &&
    iyrInt > 2009 &&
    iyrInt < 2021 &&
    eyrInt > 2019 &&
    eyrInt < 2031 &&
    ((hgt.includes("cm") && hgtInt > 149 && hgtInt < 194) ||
      (hgt.includes("in") && hgtInt > 58 && hgtInt < 77)) &&
    hcl.startsWith("#") &&
    hcl.length === 7 &&
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl) &&
    pid.length === 9 &&
    parseInt(pid, 10)
  );
};

const D4P2 = (input) =>
  getPasseports(input).filter((p) => isPasseportValid(p)).length;

export default D4P2(input);
