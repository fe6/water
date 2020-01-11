/** @format */

export default {
  name: 'WStatisticNumber',
  functional: true,
  props: {
    valueRender: Function,
    value: [Number, String],
  },
  render: (createElement: Function, { props }: any) =>
    props.valueRender(createElement, props),
};
