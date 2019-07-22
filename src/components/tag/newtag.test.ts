import { shallowMount } from '@vue/test-utils';
import NewTag from './NewTag.vue';

describe('NewTag.vue', () => {
  let wrapperModel: any = null;
  let wrapperStop: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(NewTag, {
      propsData: {
        value: '',
      },
    });
    wrapperStop = shallowMount(NewTag, {
      propsData: {
        value: '',
        stop: true,
        error(errParams: any) {
          return errParams.value === 'a';
        },
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.inputValue = 'a';
        wrapperModel.vm.clickFn({ stopPropagation: () => {} });
        wrapperModel.vm.removeClickName();
        wrapperModel.vm.returnModel();
        wrapperModel.vm.changeValue();
        wrapperModel.vm.inputEnter();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('stop', (done) => {
    wrapperStop.vm.$nextTick(() => {
      try {
        wrapperStop.vm.clickFn({ stopPropagation: () => {} });
        wrapperStop.vm.inputValue = 'a';
        wrapperStop.vm.bodyClick();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
