import { shallow } from 'vue-test-utils';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

describe('RadioGroup.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(RadioGroup, {
      slots: {
        default: [Radio],
      },
    });
  });

  it('检测快照是否一样。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.vm.$el).toMatchSnapshot();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('默认第一个选中', (done) => {
    expect(wrapper.vm.$children[0].status).toBeTruthy();
    done();
  });

  it('索引变化是否有样式更新', (done) => {
    expect(wrapper.vm.$children[0].status).toBeTruthy();
    // 是否触发 watch
    const updateChildFn = jest.fn();
    wrapper.vm.updateChild = updateChildFn;
    wrapper.vm.on = 2;
    wrapper.update();
    expect(wrapper.vm.index).toBe(2);
    expect(wrapper.vm.updateChild).toBeCalled();
    // 是否触发 watch mode
    const setModeFn = jest.fn();
    wrapper.vm.setMode = setModeFn;
    wrapper.vm.mode = 'vertical';
    wrapper.update();
    expect(wrapper.vm.mode).toBe('vertical');
    expect(wrapper.vm.setMode).toBeCalled();
    // 是否触发 watch disabled
    const setDisabledFn = jest.fn();
    wrapper.vm.setDisabled = setDisabledFn;
    wrapper.vm.disabled = true;
    wrapper.update();
    expect(wrapper.vm.disabled).toBeTruthy();
    expect(wrapper.vm.setDisabled).toBeCalled();
    // 是否触发 watch loading
    const setLoadingFn = jest.fn();
    wrapper.vm.setLoading = setLoadingFn;
    const setLoadingStatusFn = jest.fn();
    wrapper.vm.$children[0].setLoadingStatus = setLoadingStatusFn;
    wrapper.vm.loading = true;
    wrapper.update();
    expect(wrapper.vm.loading).toBeTruthy();
    expect(wrapper.vm.setLoading).toBeCalled();
    setTimeout(() => {
      expect(wrapper.vm.$children[0].setLoadingStatus).toBeCalled();
    }, 0);
    done();
  });
});
