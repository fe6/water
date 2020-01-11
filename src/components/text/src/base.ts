/** @format */

export default {
  name: 'WCascaderRender',
  functional: true,
  props: {
    render: Function,
    slot: [Object, Array],
  },
  render: (createElement: Function, { props }: any): any =>
    props.render(createElement, props),
};
