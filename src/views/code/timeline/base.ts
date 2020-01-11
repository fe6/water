/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-timeline>
  <w-timeline-item :timestamp="item.date" v-for="(item, idx) in times" :key="idx">{{ item.content }}</w-timeline-item>
</w-timeline>`,
  js: `{
  data() {
    return {
      times: [
        {
          date: '2015-09-01',
          content: 'Create a services site .',
        },
        {
          date: '2017-01-02',
          content: 'Solve initial network problems .',
        },
        {
          date: '2018-12-12',
          content: 'Technical testing .',
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
