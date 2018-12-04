<template>
  <div class="w-checktag" :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WCheckTag',
  data() {
    return {
      clicked: false,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    value: Boolean,
    size: String,
    disabled: Boolean,
    inline: Boolean,
  },
  computed: {
    classList() {
      return [
        {
          'w-checktag-active': this.statusValue,
          'w-checktag-inline': this.inline,
          'w-checktag-lg': this.size === 'large',
          'w-checktag-sm': this.size === 'small',
          'w-checktag-disabled': this.disabled,
        },
      ];
    },
    statusValue() {
      return this.value;
    },
    sizeValue() {
      return this.size;
    },
    disabledValue() {
      return this.disabled;
    },
  },
};
</script>
