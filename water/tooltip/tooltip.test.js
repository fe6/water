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
            getLayout: () => divEle,
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

  it('color', (done) => {
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
            getLayout: () => divEle,
            value: this.value,
            content: '文字提示',
            arrowColor: '#f00',
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
          expect(vm.$children[0].arrowStyle).toEqual({ 'border-top-color': '#f00' });
          done();
        }, 0);
      });
    } catch (err) {
      done.fail(err);
    }
  }); // color end

  it('color left', (done) => {
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
            getLayout: () => divEle,
            value: this.value,
            content: '文字提示',
            arrowColor: '#f00',
            placement: 'left',
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
          expect(vm.$children[0].arrowStyle).toEqual({ 'border-left-color': '#f00' });
          done();
        }, 0);
      });
    } catch (err) {
      done.fail(err);
    }
  }); // color left end

  it('color bottom', (done) => {
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
            getLayout: () => divEle,
            value: this.value,
            content: '文字提示',
            arrowColor: '#f00',
            placement: 'bottom',
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
          expect(vm.$children[0].arrowStyle).toEqual({ 'border-bottom-color': '#f00' });
          done();
        }, 0);
      });
    } catch (err) {
      done.fail(err);
    }
  }); // color bottom end

  it('color right', (done) => {
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
            getLayout: () => divEle,
            value: this.value,
            content: '文字提示',
            arrowColor: '#f00',
            placement: 'right',
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
          expect(vm.$children[0].arrowStyle).toEqual({ 'border-right-color': '#f00' });
          done();
        }, 0);
      });
    } catch (err) {
      done.fail(err);
    }
  }); // color right end
});
