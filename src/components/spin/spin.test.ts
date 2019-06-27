import { shallowMount } from '@vue/test-utils';
import Spin from './Spin.vue';

describe('Spin.vue', () => {
  let wrapperModel: any = null;
  let wrapperSize: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Spin, {
      propsData: {
        value: true,
      },
    });
    wrapperSize = shallowMount(Spin, {
      propsData: {
        value: false,
        tip: '加载',
        size: 'large',
      },
    });
  });

  it('test render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.value).toBeTruthy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test size', (done) => {
    wrapperSize.vm.$nextTick(() => {
      try {
        expect(wrapperSize.vm.value).toBeFalsy();
        expect(wrapperSize.vm.tipClass).toEqual({ 'w-spin-tip-large': 'large' });

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
