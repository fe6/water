/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '圆圈颜色',
  desc: '设置 <code>color</code> 即可',
  code: `<w-timeline>
  <w-timeline-item :color="item.color" :timestamp="item.date" v-for="(item, idx) in times" :key="idx">{{ item.content }}</w-timeline-item>
</w-timeline>`,
  js: `{
  data() {
    return {
      times: [
        {
          date: '2015-09-01',
          content: 'Create a services site .',
          color: '#1996f9',
        },
        {
          date: '2017-01-02',
          content: 'Solve initial network problems .',
          color: '#f5222d',
        },
        {
          date: '2018-12-12',
          content: 'Technical testing .',
          color: '#52c41a',
        },
        {
          date: '2019-11-19',
          content: 'Network problems being solved .',
        },
      ],
    };
  },
}`,
};

export default base;
