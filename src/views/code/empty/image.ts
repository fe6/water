import Empty from '@/components/empty/Empty.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const url = 'https://github.com/fe6/water';

const image = 'https://static2.evente.cn/static/img/logo-wta.png';

const text = `<span style="color: #f0f">没有数据，</span>\n  <a class="link" target="_blank" href="${url}">请移步</a>。`;

const base: ApiEntity = {
  title: '定制图片及文字',
  desc: '添加 <code>image</code> 属性设置图片。',
  code: `<w-empty image="${image}">\n  ${text}\n</w-empty>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Empty, {
        props: {
          image,
        },
      }, [
        h('span', {
          style: {
            color: '#f0f',
          },
        }, '没有数据，'),
        h('a', {
          class: 'link',
          attrs: {
            target: '_blank',
            href: url,
          },
        }, '请移步。'),
      ]),
    ],
  ),
};

export default base;
