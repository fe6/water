import { ApiEntity } from '@/views/entity/demoentity';

const more: ApiEntity = {
  title: '横向左边加载更多',
  desc:
    '设置 <code>openPull</code> 开启加载更多的开关.设置 <code>edgeIsPreventDefault</code> 开始边界阻止默认事件。每次触发上拉事件后，在回调函数的最后，都应该调用 finishPull() 方法。在 finishPull() 方法调用前不会触发下一次的 pulling 事件。',
  code: `<w-scroll
    open-pull
    :edge-is-prevent-default="false"
    ref="pullScroll"
    :pulling="pulling"
    :loading="loading"
    type="horizontal"
  >
  <div style="white-space: nowrap">
    <div v-for="(text, index) in texts" :key="index" style="display: inline-block;border-right: 1px solid;height:200px;">{{ text }}</div>
  </div>
</w-scroll>`,
  js: `
  {
    data() {
      return {
        texts: [],
        loading: false,
      };
    },
    created() {
      for (let i = 1; i < 100; i++) {
        this.texts.push('这是一段文字 ' + i);
      }
    },
    methods: {
      pulling(params) {
        if(params.dir === 'prev') {
          this.loading = true;
          const first = Number(this.texts[0].split(' ')[1]);
          for (let i = first - 1; i > first - 10; i--) {
            this.texts.unshift('这是一段文字 ' + i);
          }
    
          setTimeout(() => {
            this.loading = false;
            this.$refs.pullScroll.refresh();
            this.$refs.pullScroll.finishPull();
          }, 2000);
        } else {
          this.$refs.pullScroll.finishPull();
        }
      }
    },
  }
`,
};

export default more;
