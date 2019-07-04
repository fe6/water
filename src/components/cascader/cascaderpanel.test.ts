import { shallowMount } from '@vue/test-utils';
import CascaderPanel from './CascaderPanel.vue';

const option = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 100800,
    }],
  }],
}];

const optionValuse = [{
  value: 'zhejiang',
  label: 'Zhejiang',
}];
const optionDisabled = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  disabled: true,
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
  }],
}];

describe('CascaderPanel.vue', () => {
  let wrapperModel: any = null;
  let wrapperSetValue: any = null;
  let wrapperDisabled: any = null;
  let wrapperPanelData: any = null;
  let wrapperWatchValue: any = null;
  let handleOptionChange: any = null;

  beforeEach(() => {
    wrapperPanelData = shallowMount(CascaderPanel, {
      propsData: {
        value: [],
        oldValue: [],
        option: [{
          value: 'zhejiang',
          label: 'Zhejiang',
        }],
      },
    });
    wrapperModel = shallowMount(CascaderPanel, {
      propsData: {
        value: ['zhejiang'],
        oldValue: [],
        option,
      },
    });
    wrapperSetValue = shallowMount(CascaderPanel, {
      propsData: {
        value: ['zhejiang', 'hangzhou'],
        oldValue: [],
        option,
      },
    });
    wrapperDisabled = shallowMount(CascaderPanel, {
      propsData: {
        value: ['zhejiang'],
        oldValue: [],
        option: optionDisabled,
      },
    });
    wrapperWatchValue = shallowMount(CascaderPanel, {
      propsData: {
        value: ['zhejiang', 'hangzhou'],
        oldValue: [],
        option,
      },
    });
    handleOptionChange = shallowMount(CascaderPanel, {
      propsData: {
        value: ['zhejiang', 'hangzhou'],
        oldValue: [],
        option,
      },
    });
  });

  it('changeOnSelect', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        const resetStub = jest.fn();
        wrapperModel.vm.reset = resetStub;
        wrapperModel.setProps({ value: [] });
        expect(resetStub).toBeCalled();
        wrapperModel.setProps({ option: [] });
        expect(resetStub).toBeCalled();
        // const panelChangeFn = jest.fn();
        // wrapperModel.vm.$on('panelChange', panelChangeFn);
        // wrapperModel.vm.panelChange();
        // expect(panelChangeFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('setValue', (done) => {
    wrapperSetValue.vm.$nextTick(() => {
      try {
        const stopPropagationStub = jest.fn();
        wrapperSetValue.vm.setValue('', true);
        expect(wrapperSetValue.vm.value).toEqual(['']);
        wrapperSetValue.vm.optChange('Zhejiang', { stopPropagation: stopPropagationStub }, false, 0, 1);
        expect(stopPropagationStub).toBeCalled();
        wrapperSetValue.vm.optChange();

        wrapperSetValue.setProps({
          option: optionValuse,
        });
        wrapperSetValue.vm.optChange('Zhejiang', { stopPropagation: stopPropagationStub }, false, 0, 1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('setValue disabled', (done) => {
    wrapperDisabled.vm.$nextTick(() => {
      try {
        const stopPropagationStub = jest.fn();
        wrapperDisabled.vm.optChange('Zhejiang', { stopPropagation: stopPropagationStub }, false, 0, 1);
        expect(stopPropagationStub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('panelData', (done) => {
    wrapperPanelData.vm.$nextTick(() => {
      try {
        const optChangeStub = jest.fn();
        wrapperPanelData.vm.optChange('zhejiang', {}, true, 0, 0);
        wrapperModel.vm.$on('panelChange', optChangeStub);
        expect(optChangeStub).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('watch value', (done) => {
    wrapperWatchValue.vm.$nextTick(() => {
      try {
        const optChangeStub = jest.fn();
        wrapperWatchValue.vm.optChange = optChangeStub;
        wrapperWatchValue.setProps({ value: ['zhejiang', 'hangzhou'] });
        expect(optChangeStub).not.toBeCalled();
        wrapperWatchValue.setProps({ value: [] });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test optionChange', (done) => {
    handleOptionChange.vm.$nextTick(() => {
      try {
        const optChangeStub = jest.fn();
        handleOptionChange.vm.optChange = optChangeStub;
        handleOptionChange.vm.handleOptionChange(0, 0, {
          label: 'Zhejiang',
        }, {});
        expect(optChangeStub).toBeCalled();
        const stopPropagationStub = jest.fn();
        handleOptionChange.vm.handleOptionChange(0, 0, {
          label: 'Zhejiang',
          disabled: true,
          ev: {
            stopPropagation: stopPropagationStub,
          },
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
