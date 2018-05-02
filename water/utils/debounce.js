export default (func, wait = 20, immediate = true) => {
  let timeout;
  return () => {
    const args = [func, wait, immediate];
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
};
