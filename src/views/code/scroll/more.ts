import { ApiEntity } from '@/views/entity/demoentity';

const more: ApiEntity = {
  title: '加载更多',
  desc:
    '设置 <code>openPull</code> 开启加载更多的开关.设置 <code>edgeIsPreventDefault</code> 开始边界阻止默认事件。每次触发上拉事件后，在回调函数的最后，都应该调用 finishPull() 方法。在 finishPull() 方法调用前不会触发下一次的 pulling 事件。',
  code: `<w-scroll open-pull :edge-is-prevent-default="false" ref="pullScroll" :pulling="pulling" style="height: 200px;">
  <div v-for="(text, index) in texts" :key="index">{{ text }}</div>
</w-scroll>`,
  js: `
  {
    data() {
      return {
        texts: [],
      };
    },
    created() {
      for (let i = 1; i < 100; i++) {
        this.texts.push('这是一段文字' + i);
      }
    },
    methods: {
      pulling(params) {
        const len = this.texts.length;
  
        for (let i = len + 1; i < len + 11; i++) {
          this.texts.push('这是一段文字 ' + i);
        }
  
        this.$nextTick(() => {
          this.$refs.pullScroll.refresh();
          this.$refs.pullScroll.finishPull();
        });

        console.log(params, '加载中');
      },
    },
  }
`,
};

export default more;
