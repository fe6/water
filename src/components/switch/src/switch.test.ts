import { shallowMount } from '@vue/test-utils';
import Switch from './Switch.vue';

const before = () =>
  new Promise((resolve) => {
    resolve();
  });

describe('Switch.vue', () => {
  let wrapper: any = null;
  let wrapperBeforeDefault: any = null;
  let wrapperStop: any = null;
  let wrapperDisabled: any = null;

  beforeEach(() => {
    wrapper = shallowMount(Switch, {
      propsData: {
        async before() {
          return before;
        },
      },
    });
    wrapperBeforeDefault = shallowMount(Switch);
    wrapperStop = shallowMount(Switch, {
      propsData: {
        stop: true,
      },
    });
    wrapperDisabled = shallowMount(Switch, {
      propsData: {
        disabled: true,
      },
    });
  });

  it('change 事件是否 emit', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const changeFn = jest.fn();
        wrapper.vm.$on('change', changeFn);
        const switchElem = wrapper.find('.w-switch');
        switchElem.trigger('click');
        expect(changeFn).not.toBeCalled();
        expect(wrapper.vm.status).toBe(false);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('v-model', (done) => {
    wrapperBeforeDefault.vm.$nextTick(() => {
      try {
        wrapperBeforeDefault.setProps({ value: true });
        const switchElem = wrapperBeforeDefault.find('.w-switch');
        switchElem.trigger('click');
        expect(wrapperBeforeDefault.vm.status).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('stopPropagation', (done) => {
    wrapperStop.vm.$nextTick(() => {
      try {
        const switchStub = jest.fn();
        const switchEle = wrapperStop.find('.w-switch');
        switchEle.trigger('click', { stopPropagation: switchStub });
        expect(switchStub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('stopPropagation', (done) => {
    wrapperDisabled.vm.$nextTick(() => {
      try {
        const switchStub = jest.fn();
        const switchEle = wrapperDisabled.find('.w-switch');
        switchEle.trigger('click', { stopPropagation: switchStub });
        expect(wrapperDisabled.vm.status).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
