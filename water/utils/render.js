export default {
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function,
  },
  render: (h, ctx) => ctx.props.render(h),
};
