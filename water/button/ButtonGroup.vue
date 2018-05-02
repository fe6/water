<template>
  <div :class="[
    name,
    prefix ? `${prefix}-button-group` : '',
    className,
  ]">
    <slot></slot>
  </div>
</template>
<script>
const name = 'w-button-group';

export default {
  name: 'WButtonGroup',
  props: {
    prefix: String,
    className: String,
    on: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      name,
      index: this.on,
    };
  },
  mounted() {
    this.updateChild();
  },
  methods: {
    updateChild() {
      this.$children.forEach((child) => {
        child.updateIndex();
      });
    },
  },
  watch: {
    on(val) {
      this.index = val;
      this.updateChild();
    },
  },
};
</script>
