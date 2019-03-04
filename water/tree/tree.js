import WTreeNode from './tree-node';
import props from './props/tree';

export default {
  name: 'WTree',
  data() {
    return {
      root: true,
      checked: [],
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props,
  methods: {
    renderNode(createElement, data) {
      return data.map((dataItem) => {
        const children = dataItem[this.fieldNames.children];
        const key = dataItem[this.fieldNames.key];
        return createElement(WTreeNode, {
          props: {
            title: dataItem[this.fieldNames.title],
            key,
            change: this.nodeChange,
            open: !this.open.length || this.open.indexOf(key) > -1,
            value: this.value.indexOf(key) > -1,
          },
        }, children ? this.renderNode(createElement, children) : []);
      });
    },
    nodeChange(title, nowChecked, ev) {
      this.checked = [];
      this.getChecked(this.$children);
      this.$emit('model', this.checked);
      this.$emit('change', title, nowChecked, this.checked, ev);
      this.change(title, nowChecked, this.checked, ev);
    },
    getChecked(children) {
      children.forEach((child) => {
        if (child.status) {
          this.checked.push(child.title);
        }
        const son = child.$children.filter(childItem => childItem.isLeaf);
        if (son.length) {
          this.getChecked(son);
        }
      });
    },
  },
  render(createElement) {
    const self = this;
    return createElement('ul', {
      class: 'w-tree',
    }, self.renderNode(createElement, self.data));
  },
  components: {
    WTreeNode,
  },
};
