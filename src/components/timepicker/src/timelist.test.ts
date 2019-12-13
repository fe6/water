import { mount } from '@vue/test-utils';
import TimeList from './TimeList.vue';
import { genHours } from '@/helper/time';

describe('TimeList.vue', () => {
  let wrapper: any = null;
  let wrapperDisabled: any = null;
  let wrapperTime: any = null;

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
    wrapperTime = mount(TimeList, {
      propsData: {
        times: genHours(),
        type: 'minute',
        value: '03',
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

  it('test idx', (done) => {
    const { vm } = wrapperTime;
    vm.$nextTick(() => {
      try {
        vm.initScroll();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
