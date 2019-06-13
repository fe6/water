export default {
  name: 'Render',
  functional: true,
  props: {
    render: Function,
    data: Object,
    before: {
      type: Function,
      default: () => {},
    },
    change: {
      type: Function,
      default: () => {},
    },
  },
  render: (h: Function, context: any) => context.props.render(h, context),
};
