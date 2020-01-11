/** @format */

export default (space: number): string => {
  const newSpace = Math.min(space, 48);
  return space > 0 ? `${newSpace / 2}px` : '';
};
