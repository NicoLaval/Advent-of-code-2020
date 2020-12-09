export const sumArray = (array) =>
  Array.isArray(array) && array.length > 0 ? array.reduce((a, b) => a + b) : 0;
