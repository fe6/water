export const getMaxLengthValue = (value: string | number, maxLength: string | number) => {
  const newMax: number = Number(maxLength);
  return newMax > 0 ? String(value).slice(0, newMax) : value;
};

export const number: string = '1';
