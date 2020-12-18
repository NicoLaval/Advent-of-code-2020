export const getRes = (line, resolver) => {
  let res = line.replace(/ /g, "");
  while (res.includes("(") || res.includes("*") || res.includes("+")) {
    const rxGroupe = /\(([^\s()}]+)\)/g;
    const toReplaceGroup = rxGroupe.exec(res);
    if (toReplaceGroup) {
      res = res.replace(toReplaceGroup[0], getRes(toReplaceGroup[1], resolver));
      continue;
    }
    res = resolver(res);
  }
  return eval(res);
};
