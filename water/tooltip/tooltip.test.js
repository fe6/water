import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import Tooltip from './Tooltip';

const render = createRenderer();

describe('Tooltip.vue', () => {
  it('render', (done) => {
    const divEle = document.createElement('div');
    const vm = new Vue({
      el: divEle,
      data() {
        return {
          value: false,
        };
      },
      render(h) {
        return h(Tooltip, {
          props: {
            render: divEle,
            value: this.value,
            content: '文字提示',
          },
        });
      },
    });
    try {
      render.renderToString(vm, () => {
        expect(vm.$children[0].$data.status).toBeFalsy();
        vm.$data.value = true;
        setTimeout(() => {
          expect(vm.$children[0].$data.status).toBeTruthy();
          done();
        }, 0);
      });
    } catch (err) {
      done.fail(err);
    }
  });
});
