import { mount } from 'vue-test-utils';
import Affix from './Affix';

describe('Affix.vue', () => {
  let wrapper = null;
  let wrapperTop = null;
  let wrapperbeforeDestroy = null;

  beforeEach(() => {
    wrapper = mount(Affix, {
      propsData: {
        offsetBottom: 10,
      },
      attachToDocument: true,
    });
    wrapperTop = mount(Affix, {
      propsData: {
        offsetTop: 10,
      },
      attachToDocument: true,
    });
    wrapperbeforeDestroy = mount(Affix, {
      attachToDocument: true,
    });
  });

  it('检测向上定位图钉类型。', (done) => {
    wrapperTop.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          wrapperTop.vm.height = 32;
          wrapperTop.vm.offset = 578;
          wrapperTop.vm.target.scrollTop = wrapperTop.vm.target.innerHeight;
          wrapperTop.vm.debounce();
          expect(wrapperTop.vm.style).toBe('position: fixed;top: 10px; zIndex: 10;');
          expect(wrapperTop.vm.offsetType).toBe('top');
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测向下定位图钉类型。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          wrapper.vm.height = 32;
          wrapper.vm.offset = 1578;
          wrapper.vm.target.scrollTop = wrapper.vm.target.innerHeight;
          wrapper.vm.debounce();
          expect(wrapper.vm.style).toBe('position: fixed;bottom: 10px; zIndex: 10;');
          expect(wrapper.vm.offsetType).toBe('bottom');
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测是否有 innerHeight 属性。', (done) => {
    try {
      wrapperbeforeDestroy.vm.target.innerHeight = undefined;
      wrapper.vm.target.offsetHeight = 5;
      setTimeout(() => {
        expect(wrapper.vm.boxHeight).toBe(wrapper.vm.target.offsetHeight);
        done();
      }, 0);
    } catch (err) {
      done.fail(err);
    }
  });

  it('检测是否销毁全局注册方法。', (done) => {
    wrapperbeforeDestroy.vm.$nextTick(() => {
      try {
        const debounceFn = jest.fn();
        wrapperbeforeDestroy.removeEventListener = debounceFn;
        wrapperbeforeDestroy.destroy();
        wrapperbeforeDestroy.removeEventListener();
        expect(debounceFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
