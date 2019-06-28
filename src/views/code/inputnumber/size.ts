import InputNumber from '@/components/inputnumber/InputNumber.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '三种大小',
  desc: '设置 <code>size</code> 即可。',
  code: `<w-inputnumber size="small" />
<w-inputnumber />
<w-inputnumber size="large" />`,
  render: (h: Function, context: any) => {
    const { value } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(InputNumber, {
          props: {
            value,
            size: 'small',
          },
          on: {
            change(changeParams: any) {
              context.props.changeHandle({
                attr: 'sizeValue',
                value: changeParams.value,
              });
            },
          },
          style: {
            marginRight: '16px',
          },
        }),
        h(InputNumber, {
          props: {
            value,
          },
          style: {
            marginRight: '16px',
          },
          on: {
            change(changeParams: any) {
              context.props.changeHandle({
                attr: 'sizeValue',
                value: changeParams.value,
              });
            },
          },
        }),
        h(InputNumber, {
          props: {
            value,
            size: 'large',
          },
          on: {
            change(changeParams: any) {
              context.props.changeHandle({
                attr: 'sizeValue',
                value: changeParams.value,
              });
            },
          },
        }),
      ],
    );
  },
};

export default base;
