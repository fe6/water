import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import Popconfirm from './Popconfirm';

const render = createRenderer();

describe('Popconfirm.vue', () => {
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
        return h(Popconfirm, {
          props: {
            render: divEle,
            value: this.value,
          },
        }, [
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
  }); // end render

  it('test changeStatus', (done) => {
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
        return h(Popconfirm, {
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
        vm.$children[0].okFn();
        const okJest = jest.fn();
        expect(vm.$children[0].status).toBeFalsy();
        vm.$children[0].changeStatus = okJest;
        setTimeout(() => {
          expect(okJest).toBeCalled();
          done();
        }, 1000);
      });
    } catch (err) {
      done.fail(err);
    }
  }); // test changeStatus end

  it('content attr no slot', (done) => {
    const divEle = document.createElement('div');
    const vm = new Vue({
      el: divEle,
      render(h) {
        return h(Popconfirm, {
          props: {
            render: divEle,
          },
        }, [
          h('title', this.$slots.content),
        ]);
      },
    });
    try {
      render.renderToString(vm, () => {
        vm.$children[0].cancelFn();
        expect(vm.$children[0].content).toBeFalsy();
        done();
      });
    } catch (err) {
      done.fail(err);
    }
  }); // content attr no slot

  it('body click', (done) => {
    const divEle = document.createElement('div');
    const vm = new Vue({
      el: divEle,
      render(h) {
        return h(Popconfirm, {
          props: { render: divEle },
        }, [h('title', this.$slots.content)]);
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

  it('loading', (done) => {
    const divEle = document.createElement('div');
    const vm = new Vue({
      el: divEle,
      render(h) {
        return h(Popconfirm, {
          props: { render: divEle, loading: true },
        }, [h('title', this.$slots.content)]);
      },
    });
    try {
      render.renderToString(vm, () => {
        vm.$children[0].cancelFn();
        expect(vm.$children[0].status).toBeFalsy();
        done();
      });
    } catch (err) {
      done.fail(err);
    }
  }); // body click
});
