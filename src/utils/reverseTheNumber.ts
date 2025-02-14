export const reverseTheNumber = (num: number): number => {
  return Number.parseInt(num.toString().split("").reverse().join(""), 10);
};
