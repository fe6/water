<!-- @format -->

<template>
  <button
    :type="htmlType"
    :disabled="disabled"
    :class="[
      `${preName}${groupClass}`,
      {
        [`${preName}${groupClass}-${type}`]: type,
        [`${preName}${groupClass}-${size}`]: size,
        [`${preName}${groupClass}-ghost`]: ghost,
        [`${preName}${groupClass}-loading`]: loading,
        [`${preName}${groupClass}-click`]: clicked,
        [`${preName}${groupClass}-disabled`]: disabled,
        [`${preName}${groupClass}-one`]: hasGroup && isOnlyOne,
        [`${preName}${groupClass}-on`]: status,
        [`${preName}${groupClass}-${type}-on`]: type && status,
        [`${preName}-icon${size ? `-${size}` : ''}`]: !$slots.default,
      },
      className,
    ]"
    @animationend="removeClickName($event)"
    @click="clickFn($event)"
  >
    <Icon
      v-show="loading || !!$slots.icon"
      :color="colors[type] || colorDefult"
      :spin="loading"
    >
      <slot name="icon"></slot>
    </Icon>
    <span
      v-if="$slots.default"
      :class="[
        `${preName}-text`,
        {
          [`${preName}-text-icon`]: loading || !!$slots.icon,
          [`${preName}-primary-text`]: type === 'primary',
          [`${preName}-text-icon-large`]: loading && size === 'large',
          [`${preName}-text-icon-small`]: loading && size === 'small',
        },
      ]"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
  import { Component, Prop, Emit, Inject, Vue } from 'vue-property-decorator';
  import Icon from '@/components/icon/src/Icon.vue';
  import { findUpNode } from '@/helper/node';
  import { colors, ColorEntity, colorDefult } from './colors';

  @Component({
    components: {
      Icon,
    },
  })
  export default class Button extends Vue {
    name = 'WButton';

    preName = 'w-btn';

    colors: ColorEntity = colors;

    colorDefult: string = colorDefult;

    clicked = false;

    clickEvent: any = null;

    isOnlyOne: boolean = false;

    @Prop(String) private type?: string;

    @Prop(String) private size?: string;

    @Prop({
      type: String,
      default: 'button',
    })
    private htmlType?: string;

    @Prop(Boolean) private loading?: boolean;

    @Prop(Boolean) private stop?: boolean;

    @Prop(Boolean) private disabled?: boolean;

    @Prop(Boolean) private ghost?: boolean;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    @Prop({
      type: Function,
      default: () => {},
    })
    private click?: Function;

    @Inject({
      default: {
        value: '',
      },
    })
    private group!: any;

    get status(): boolean {
      return this.hasGroup && this.group.value === this.$attrs.value;
    }

    get hasGroup(): boolean {
      this.$nextTick(() => {
        this.isOnlyOne = this.$parent.$children.length < 2;
      });

      return findUpNode(this, 'WButtonGroup') !== undefined;
    }

    get groupClass(): string {
      return this.hasGroup ? '-wrap' : '';
    }

    clickFn(ev: MouseEvent) {
      this.clicked = !this.loading;
      this.clickEvent = ev;
      if (this.stop) {
        ev.stopPropagation();
      }
    }

    @Emit('click')
    removeClickName(ev: AnimationEvent) {
      this.clicked = false;

      const reParams = {
        ev: this.clickEvent,
        animEvent: ev,
        key: this.$vnode.key,
      };
      (this.click as Function)(reParams);

      this.clickEvent = null;

      return reParams;
    }
  }
</script>

<style lang="scss">
  @import 'button.scss';
</style>
