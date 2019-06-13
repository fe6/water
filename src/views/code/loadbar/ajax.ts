export default `// 以 fetch 为例，部分代码省略
export default {
  methods: {
    getData () {
      this.$Loading.start();
      fetch('/api/someurl'.then(() => {
        this.$Loading.finish();
      });
    }
  }
}`;
