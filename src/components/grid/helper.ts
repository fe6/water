export default (space: number): string => {
  const newSpace = Math.max(space / 2, 48);
  return space > 0 ? `${newSpace / 2}px` : '';
};
