import { mount } from '@vue/test-utils';
import TimeList from './TimeList.vue';
import { genHours } from '@/helper/time';

describe('TimeList.vue', () => {
  let wrapper: any = null;
  let wrapperDisabled: any = null;

  beforeEach(() => {
    wrapper = mount(TimeList, {
      propsData: {
        times: genHours(),
        type: 'minute',
      },
    });
    wrapperDisabled = mount(TimeList, {
      propsData: {
        times: genHours(),
        type: 'minute',
        disabledRender: () => true,
      },
    });
  });

  it('test render', (done) => {
    const { vm } = wrapper;
    vm.$nextTick(() => {
      try {
        vm.selectTime('11', 3);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test render', (done) => {
    const { vm } = wrapperDisabled;
    vm.$nextTick(() => {
      try {
        vm.selectTime('11', 3);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
