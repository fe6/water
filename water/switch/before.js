export default function before() {
  return new Promise((resolve) => {
    process.nextTick(() => {
      resolve();
    });
  });
}
