export const isSimple = (value: number) => {
  if (!Number.isInteger(value)) return false;

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) return false;
  }
  return value > 1;
};

export const generateSimpleNumbers = (value: number, numbers: number[]) => {
  const last = numbers.at(-1) || 0;
  for (let i = last + 1; i <= value; i++) {
    if (isSimple(i)) {
      numbers.push(i);
    }
  }

  return numbers;
};
