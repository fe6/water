import { shallowMount } from '@vue/test-utils';
import PageJump from './PageJump';

describe('PageJump.vue', () => {
  let wrapperModel = null;

  beforeEach(() => {
    wrapperModel = shallowMount(PageJump, {
      propsData: {
        value: 1,
      },
    });
  });

  it('watch', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.value).toBe(1);
        wrapperModel.vm.jumpPage({ target: { value: 33 } });
        expect(wrapperModel.vm.value).toBe(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
