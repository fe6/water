export default function before(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>{
      resolve();
    });
  });
}
