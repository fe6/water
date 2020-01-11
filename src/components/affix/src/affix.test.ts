/** @format */

import { mount } from '@vue/test-utils';
import Affix from './Affix.vue';

describe('Affix.vue', () => {
  let wrapperBottom: any = null;
  let wrapperOffsetValue: any = null;
  let wrapperbeforeDestroy: any = null;

  beforeEach(() => {
    wrapperOffsetValue = mount(Affix, {
      propsData: {
        offsetTop: 20,
        destroy: false,
      },
      attachToDocument: true,
    });
    wrapperBottom = mount(Affix, {
      propsData: {
        offsetBottom: 110,
      },
      attachToDocument: true,
    });
    wrapperbeforeDestroy = mount(Affix, {
      attachToDocument: true,
    });
  });

  it('test render', (done) => {
    wrapperBottom.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          wrapperBottom.vm.updatePostion();
          expect(wrapperBottom.vm.affixStyle).toBe('');
          expect(wrapperBottom.vm.offsetType).toBe('bottom');
          expect(wrapperBottom.vm.offsetValue).toBe(110);
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test offsetValue', (done) => {
    wrapperOffsetValue.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          expect(wrapperOffsetValue.vm.offsetValue).toBe(20);
          wrapperOffsetValue.destroy();
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test destroy', (done) => {
    wrapperbeforeDestroy.vm.$nextTick(() => {
      try {
        expect(wrapperbeforeDestroy.vm.offsetValue).toBe(10);
        const debounceFn = jest.fn();
        wrapperbeforeDestroy.vm.target.removeEventListener = debounceFn;
        wrapperbeforeDestroy.destroy();
        wrapperbeforeDestroy.vm.target.removeEventListener();
        expect(debounceFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
