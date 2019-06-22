import { ApiEntity } from '@/views/entity/demoentity';
import RadioGroup from '@/components/radio/RadioGroup.vue';
import { myDatas, DataEntity } from '@/views/code/checkbox/base';

const base: ApiEntity = {
  title: 'Radio 组',
  desc: '方便的从数组生成 Radio 组。',
  code: `<w-radio-group value="鸭梨" :options="${myDatas.map((data: DataEntity) => JSON.stringify(data))}"></w-radio-group>`,
  render: (h: Function, context: any) => {
    const { value } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(RadioGroup,
          {
            props: {
              options: myDatas,
              value,
            },
            on: {
              change(changeParams: any) {
                context.props.change(changeParams);
              },
            },
          }),
      ],
    );
  },
};

export default base;
