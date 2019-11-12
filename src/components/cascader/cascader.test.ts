import { shallowMount } from '@vue/test-utils';
import Cascader from './Cascader.vue';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 100800,
          },
        ],
      },
    ],
  },
];

describe('Cascader.vue', () => {
  let wrapperModel: any = null;
  let wrapperSearchReset: any = null;
  let wrapperReset: any = null;
  let wrapperReset2: any = null;
  let wrapperPanelChange: any = null;
  let wrapperUpdateValue: any = null;
  let wrapperSearchFocus: any = null;
  let wrapperDisabled: any = null;
  let wrapperUpdataResult: any = null;

  beforeEach(() => {
    wrapperUpdataResult = shallowMount(Cascader, {
      propsData: {
        options,
      },
    });
    wrapperDisabled = shallowMount(Cascader, {
      propsData: {
        options,
        disabled: true,
      },
    });
    wrapperUpdateValue = shallowMount(Cascader, {
      propsData: {
        options,
      },
    });
    wrapperSearchFocus = shallowMount(Cascader, {
      propsData: {
        options,
      },
    });
    wrapperSearchReset = shallowMount(Cascader, {
      propsData: {
        options,
        search: true,
      },
    });
    wrapperModel = shallowMount(Cascader, {
      propsData: {
        options,
        search: true,
      },
    });
    wrapperReset = shallowMount(Cascader, {
      propsData: {
        options,
        value: ['Zhejiang', 'Hangzhou', 'West Lake'],
      },
    });
    wrapperReset2 = shallowMount(Cascader, {
      propsData: {
        options,
        value: ['Zhejiang', 'Hangzhou', 'West Lake'],
      },
    });
    wrapperPanelChange = shallowMount(Cascader, {
      propsData: {
        options,
        search: true,
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.searchData).toEqual([
          {
            disabled: false,
            floor: 2,
            index: 0,
            item: {
              code: 100800,
              label: 'West Lake',
              value: 'xihu',
            },
            children: [],
            path: 'zhejiang / hangzhou / xihu',
            value: ['zhejiang', 'hangzhou', 'xihu'],
            label: ['Zhejiang', 'Hangzhou', 'West Lake'],
          },
        ]);
        const searchResetStub = jest.fn();
        const panelChangeStub = jest.fn();
        const stopPropagationStub = jest.fn();
        const updateValueStub = jest.fn();
        wrapperModel.vm.cascaderClick({});
        wrapperModel.vm.searchReset = searchResetStub;
        wrapperModel.vm.panelChange = panelChangeStub;
        wrapperModel.vm.updateValue = updateValueStub;
        wrapperModel.vm.searchChange({ value: [], children: [] }, {});
        expect(searchResetStub).toBeCalled();
        expect(wrapperModel.vm.searchKeyWord).toBe('');
        expect(wrapperModel.vm.searchHoverIndex).toBe(-1);
        wrapperModel.vm.searchKeyUp();
        wrapperModel.vm.searchKeyDown();
        wrapperModel.vm.getSearchResult([
          {
            value: 'xihu',
            options: {
              value: 'xihu',
              label: 'West Lake',
              code: 100800,
            },
            floor: 2,
            index: 0,
          },
        ]);
        wrapperModel.vm.searchEnter();
        expect(searchResetStub).toBeCalled();
        expect(panelChangeStub).toBeCalled();
        expect(wrapperModel.vm.optStatus).toBeFalsy();
        wrapperModel.vm.clear({ stopPropagation: stopPropagationStub });
        expect(stopPropagationStub).toBeCalled();
        wrapperModel.vm.currentOption = {
          children: ['xxx'],
        };
        wrapperModel.vm.reset();
        expect(updateValueStub).toBeCalled();
        expect(wrapperModel.vm.chooseResult).toEqual([]);
        wrapperModel.setProps({ search: true });
        wrapperModel.vm.searchKeyWord = 'zhejiang';
        wrapperModel.vm.clear({ stopPropagation: stopPropagationStub });
        wrapperModel.vm.resizeChange();
        wrapperModel.destroy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('reset', (done) => {
    wrapperReset.vm.$nextTick(() => {
      try {
        wrapperReset.vm.currentOption = {
          children: ['xxx'],
        };
        wrapperReset.vm.chooseResult = ['zhejiang', 'hangzhou', 'xihu'];
        wrapperReset.vm.reset();
        expect(wrapperReset.vm.chooseResult).toEqual([
          'zhejiang',
          'hangzhou',
          'xihu',
        ]);
        const resetStub = jest.fn();
        wrapperReset.vm.optStatus = true;
        wrapperReset.vm.reset = resetStub;
        wrapperReset.vm.bodyClick();
        expect(resetStub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('panelChange', (done) => {
    wrapperPanelChange.vm.$nextTick(() => {
      try {
        wrapperPanelChange.vm.panelChange({
          children: [],
          value: ['zhejiang', 'hangzhou', 'xihu'],
        });
        expect(wrapperPanelChange.vm.chooseResult).toEqual([
          'zhejiang',
          'hangzhou',
          'xihu',
        ]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('searchReset', (done) => {
    wrapperSearchReset.vm.$nextTick(() => {
      try {
        const panelChangeStub = jest.fn();
        wrapperSearchReset.vm.optStatus = true;
        wrapperSearchReset.vm.panelChange = panelChangeStub;
        wrapperSearchReset.vm.searchKeyUp();
        wrapperSearchReset.vm.searchChange({ value: [], children: [] }, {});
        expect(wrapperSearchReset.vm.searchHoverIndex).toBe(-1);
        wrapperSearchReset.vm.$refs.input = null;
        wrapperSearchReset.vm.searchEnter({});
        const searchblurStub = jest.fn();
        wrapperSearchReset.vm.searchblur = searchblurStub;
        expect(searchblurStub).not.toBeCalled();
        expect(panelChangeStub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('reset else if', (done) => {
    wrapperReset2.vm.$nextTick(() => {
      try {
        const resetStub = jest.fn();
        wrapperReset2.vm.reset = resetStub;
        wrapperReset2.vm.bodyClick();
        expect(resetStub).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('updateValue', (done) => {
    wrapperUpdateValue.vm.$nextTick(() => {
      try {
        const updateValueStub = jest.fn();
        wrapperUpdateValue.vm.updateValue = updateValueStub;
        wrapperUpdateValue.vm.reset();
        expect(updateValueStub).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('searchFocus', (done) => {
    wrapperSearchFocus.vm.$nextTick(() => {
      try {
        const searchFocusStub = jest.fn();
        wrapperSearchFocus.vm.searchFocus = searchFocusStub;
        wrapperSearchFocus.vm.cascaderClick();
        expect(searchFocusStub).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('disabled', (done) => {
    wrapperDisabled.vm.$nextTick(() => {
      try {
        wrapperDisabled.vm.cascaderClick();
        expect(wrapperDisabled.vm.optStatus).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('updata chooseResult', (done) => {
    wrapperUpdataResult.vm.$nextTick(() => {
      try {
        wrapperUpdataResult.vm.panelChange({ value: [], children: ['xxx'] });
        expect(wrapperUpdataResult.vm.chooseResult).toEqual([]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
