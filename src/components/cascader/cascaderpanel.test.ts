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
  let wrapperBodyClick: any = null;
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
    wrapperBodyClick = shallowMount(CascaderPanel, {
      propsData: {
        value: ['zhejiang'],
        oldValue: [],
        option,
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
        wrapperModel.vm.bodyClick();
        expect(wrapperModel.vm.currentOption).toEqual({
          current: 'zhejiang', floor: 0, index: -1, nextPanel: [], option: undefined, value: ['zhejiang'],
        });
        const panelChangeFn = jest.fn();
        wrapperModel.vm.$on('panelChange', panelChangeFn);
        wrapperModel.vm.panelChange();
        expect(panelChangeFn).toBeCalled();
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
        wrapperSetValue.vm.optChange('Zhejiang', { stopPropagation: stopPropagationStub });
        expect(stopPropagationStub).toBeCalled();
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
        wrapperDisabled.vm.optChange('Zhejiang', { stopPropagation: stopPropagationStub });
        expect(stopPropagationStub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('bodyClick', (done) => {
    wrapperBodyClick.vm.$nextTick(() => {
      try {
        const optChangeStub = jest.fn();
        wrapperBodyClick.vm.optChange = optChangeStub;
        wrapperBodyClick.vm.currentOption = {};
        wrapperBodyClick.vm.bodyClick();
        expect(optChangeStub).not.toBeCalled();
        wrapperBodyClick.vm.currentOption = {
          nextPanel: [{
            value: 'xihu',
            label: 'West Lake',
            code: 100800,
          }],
        };
        wrapperBodyClick.vm.bodyClick();
        expect(optChangeStub).toBeCalled();
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
        wrapperPanelData.vm.optChange('zhejiang', {}, true);
        wrapperModel.vm.$on('panelChange', optChangeStub);
        expect(wrapperPanelData.vm.panelData).toEqual([]);
        expect(optChangeStub).not.toBeCalled();
        wrapperPanelData.vm.reset();
        expect(wrapperPanelData.vm.panelData).toEqual([]);
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
        handleOptionChange.vm.handleOptionChange({
          label: 'Zhejiang',
        }, {});
        expect(optChangeStub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
