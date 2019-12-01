import { mount } from '@vue/test-utils';
import Statistic from './Statistic.vue';

describe('Statistic.vue', () => {
  let wrapperModel: any = null;
  let wrapperDecimal: any = null;

  beforeEach(() => {
    wrapperModel = mount(Statistic, {
      propsData: {
        value: 1013,
      },
    });
    wrapperDecimal = mount(Statistic, {
      propsData: {
        value: 1013.12,
      },
    });
  });

  it('test render', (done) => {
    const { vm } = wrapperModel;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test decimal', (done) => {
    const { vm } = wrapperDecimal;
    vm.$nextTick(() => {
      try {
        wrapperDecimal.setProps({ precision: 4 });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
