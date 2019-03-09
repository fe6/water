export default {
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function,
    data: Object,
  },
  render: (h, { props }) => props.render(h, props.data),
};
