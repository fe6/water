import { hasOwn } from '../utils/o';
import WCheckbox from '../checkbox/Checkbox';
import props from './props/tree-node';

export default {
  name: 'WTreeNode',
  data() {
    return {
      status: this.value,
      indeterminate: false,
      checked: [],
      childStatus: this.open,
      isLeaf: true, // 是否是 tree-node 的标识
    };
  },
  props,
  mounted() {
    this.initChild();
    this.initIndeterminate();
    if (this.status) {
      this.updateAllParent(this.$parent, false);
    }
  },
  methods: {
    initIndeterminate() {
      const childsChecked = this.$children.filter(
        childItem => childItem.isLeaf && childItem.status,
      );
      const childs = this.$children.filter(childItem => childItem.isLeaf);
      this.indeterminate = childsChecked.length > 0 && childs.length !== childsChecked.length;
    },
    initChild() {
      const childs = this.$children.filter(childItem => childItem.isLeaf && childItem.status);
      childs.forEach((sonItem) => {
        const childSon = sonItem.$children.filter(item => item.isLeaf);
        childSon.forEach((childSonItem) => {
          childSonItem.status = true;
        });
      });
    },
    update(ev, status) {
      this.checked = [];
      this.status = status;
      if (this.status) {
        this.checked.push(this.title);
      }
      this.updateAllParent(this.$parent);
      this.updateAllChilren(this.$children);
      this.change(this.title, this.checked, ev);
    },
    updateAllParent(parent, updateChecked = true) {
      const childs = parent.$children.filter(parentItem => parentItem.isLeaf);
      const childNoChecked = childs.filter(childItem => !childItem.status).length;
      parent.status = !childNoChecked;
      parent.indeterminate = !!childNoChecked && (childs.length !== childNoChecked);
      if (parent.status && parent.title && updateChecked) {
        this.checked.push(parent.title);
      }
      if (!parent.root) {
        this.updateAllParent(parent.$parent, updateChecked);
      }
    },
    updateAllChilren(children) {
      const childs = children.filter(childrenItem => childrenItem.isLeaf);
      childs.forEach((child) => {
        child.status = !child.status;
        const childSon = child.$children.filter(childItem => childItem.isLeaf);
        if (child.status) {
          this.checked.push(child.title);
        }
        this.updateAllChilren(childSon);
      });
    },
  },
  render(createElement) {
    let child = '';
    const self = this;
    const hasChild = hasOwn(this.$slots, 'default');

    if (hasChild) {
      child = createElement('ul', {
        class: ['w-tree-child', {
          'w-tree-child-show': self.childStatus,
        }],
      }, this.$slots.default);
    }

    return createElement('li', {
      class: 'w-tree-node',
    }, [createElement('span', {
      class: ['w-tree-noop', {
        'w-tree-arrow-active': self.childStatus,
        'w-tree-arrow': hasChild,
      }],
      on: {
        click() {
          self.childStatus = !self.childStatus;
        },
      },
    }), createElement(WCheckbox, {
      class: 'w-tree-checkbox',
      on: {
        change(ev, status) {
          self.update(ev, status);
        },
      },
      props: {
        on: self.status,
        indeterminate: self.indeterminate,
      },
    }, self.title), child]);
  },
};
