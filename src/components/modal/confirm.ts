import Vue from 'vue';
import WModal from '@/components/modal/Modal.vue';
import WIcon from '@/components/icon/Icon.vue';
import { isFunction } from '@/helper/type';
import path from '@/components/modal/path';

interface PropsEntity {
  okType: string;
  okText: string;
  cancelText: string;
  title: string | Function;
  icon: string | Function;
  content: string | Function;
  cancelable: boolean;
}

interface ConfigEntity {
  type: string;
  color: string;
}

export default {
  info(props: PropsEntity) {
    this.confirm(props, {
      type: 'info',
      color: '#0297fe',
    });
  },
  warning(props: PropsEntity) {
    this.confirm(props, {
      type: 'info',
      color: '#ffa430',
    });
  },
  error(props: PropsEntity) {
    props.okType = 'danger';
    this.confirm(props, {
      type: 'error',
      color: '#f04',
    });
  },
  success(props: PropsEntity) {
    this.confirm(props, {
      type: 'success',
      color: '#25d142',
    });
  },
  confirm(props: PropsEntity, config: ConfigEntity) {
    const {
      cancelable,
      okText,
      title,
      cancelText,
      content,
    } = props || {
      cancelable: true,
      okText: '确定',
      cancelText: '取消',
      title: '',
      content: '',
    };

    const {
      type,
      color,
    } = config || { type: 'confirm', color: '#ffa430' };

    this.creatConfirm({
      okType: '',
      cancelable,
      okText,
      title,
      cancelText,
      icon(h: Function) {
        return h(WIcon, [
          h('svg', [
            h('g', {
              attrs: {
                stroke: 'none',
                'stroke-width': 1,
                fill: 'none',
                'fill-rule': 'evenodd',
              },
            }, [
              h('path', {
                attrs: {
                  d: (path as any)[type],
                  fill: color,
                },
              }),
            ]),
          ]),
        ]);
      },
      content,
    });
  },
  creatConfirm(props: PropsEntity) {
    const {
      okType,
      cancelable,
      okText,
      title,
      cancelText,
      icon,
      content,
    } = props || {
      okType: '',
      cancelable: true,
      okText: '确定',
      cancelText: '取消',
      title: '',
      icon: '',
      content: '',
    };

    const Instance = new Vue({
      render(h) {
        return h(WModal, {
          class: 'w-confirm',
          props: {
            okType,
            okText,
            cancelable,
            cancelText,
          },
        }, [
          h('div', {
            class: 'w-confirm-icon',
          }, [
            isFunction(icon) ? (icon as Function)(h) : icon,
          ]),
          h('div', {
            class: 'w-confirm-title',
          }, [
            isFunction(title) ? (title as Function)(h) : title,
          ]),
          h('div', {
            class: 'w-confirm-content',
          }, [
            isFunction(content) ? (content as Function)(h) : content,
          ]),
        ]);
      },
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const modal = Instance.$children[0];
    (modal as any).status = true;
    return modal;
  },
};
