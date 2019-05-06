import { mount } from '@vue/test-utils';
import Affix from './Affix.vue';

describe('Affix.vue', () => {
  let wrapperBottom:any = null;
  let wrapperbeforeDestroy:any = null;

  beforeEach(() => {
    wrapperBottom = mount(Affix, {
      propsData: {
        offsetBottom: 10,
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
