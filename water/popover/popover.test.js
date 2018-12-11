import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import Popover from './Popover';

const render = createRenderer();

describe('Popover.vue', () => {
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
        return h(Popover, {
          props: {
            render: divEle,
            value: this.value,
          },
        }, [
          h('title', this.$slots.title),
          h('content', this.$slots.content),
        ]);
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

  it('test appendChild', (done) => {
    /* eslint-disable no-underscore-dangle */
    const content = new Vue({
      render: h => h('div', {}, [h('content', {}, 'hell')]),
    }).$mount()._vnode;

    const divEle = document.createElement('div');
    const vm = new Vue({
      el: divEle,
      data() {
        return {
          value: false,
        };
      },
      render(h) {
        return h(Popover, {
          props: {
            render: divEle,
            value: this.value,
          },
        }, [
          h('content', {}, [content]),
        ]);
      },
    });
    try {
      render.renderToString(vm, () => {
        expect(vm.$children[0].$data.title).toBeFalsy();
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

  it('no slot', (done) => {
    const divEle = document.createElement('div');
    const vm = new Vue({
      el: divEle,
      render(h) {
        return h(Popover, {
          props: {
            render: divEle,
          },
        });
      },
    });
    try {
      render.renderToString(vm, () => {
        expect(vm.$children[0].$data.title).toBeFalsy();
        done();
      });
    } catch (err) {
      done.fail(err);
    }
  });

  it('body click', (done) => {
    const divEle = document.createElement('div');
    const vm = new Vue({
      el: divEle,
      render(h) {
        return h(Popover, {
          props: { render: divEle },
        });
      },
    });
    try {
      render.renderToString(vm, () => {
        vm.$children[0].boxClick({ stopPropagation() {} });
        expect(vm.$children[0].status).toBeFalsy();
        done();
      });
    } catch (err) {
      done.fail(err);
    }
  }); // body click
});
