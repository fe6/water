export default {
  name: 'Render',
  functional: true,
  props: {
    render: Function,
    data: Object,
    beforeHandle: {
      type: Function,
      default: () => {},
    },
    changeHandle: {
      type: Function,
      default: () => {},
    },
  },
  render: (h: Function, context: any) =>
    context.props.render(h, context.props.data, context),
};
