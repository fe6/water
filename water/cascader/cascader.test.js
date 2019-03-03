import { shallow } from 'vue-test-utils';
import Cascader from './Cascader';

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

describe('Cascader.vue', () => {
  let wrapperModel = null;
  let wrapperSearchReset = null;
  let wrapperReset = null;
  let wrapperReset2 = null;
  let wrapperPanelChange = null;
  let wrapperUpdateValue = null;
  let wrapperSearchFocus = null;
  let wrapperDisabled = null;
  let wrapperUpdataResult = null;
  let wrapperChangeOnSelect = null;

  beforeEach(() => {
    wrapperChangeOnSelect = shallow(Cascader, {
      propsData: {
        option,
        changeOnSelect: true,
      },
    });
    wrapperUpdataResult = shallow(Cascader, {
      propsData: {
        option,
      },
    });
    wrapperDisabled = shallow(Cascader, {
      propsData: {
        option,
        disabled: true,
      },
    });
    wrapperUpdateValue = shallow(Cascader, {
      propsData: {
        option,
      },
    });
    wrapperSearchFocus = shallow(Cascader, {
      propsData: {
        option,
      },
    });
    wrapperSearchReset = shallow(Cascader, {
      propsData: {
        option,
        search: true,
      },
    });
    wrapperModel = shallow(Cascader, {
      propsData: {
        option,
        search: true,
      },
    });
    wrapperReset = shallow(Cascader, {
      propsData: {
        option,
        value: ['zhejiang', 'hangzhou', 'xihu'],
      },
    });
    wrapperReset2 = shallow(Cascader, {
      propsData: {
        option,
        value: ['zhejiang', 'hangzhou', 'xihu'],
      },
    });
    wrapperPanelChange = shallow(Cascader, {
      propsData: {
        option,
        search: true,
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.searchData).toEqual([{
          disabled: false,
          floor: 2,
          index: 0,
          nextPanel: [],
          option: {
            code: 100800,
            label: 'West Lake',
            value: 'xihu',
          },
          path: 'zhejiang / hangzhou / xihu',
          value: [
            'zhejiang',
            'hangzhou',
            'xihu',
          ],
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
        wrapperModel.vm.searchChange({ value: [], nextPanel: [] }, {});
        expect(searchResetStub).toBeCalled();
        expect(wrapperModel.vm.searchKeyWord).toBe('');
        expect(wrapperModel.vm.searchHoverIndex).toBe(-1);
        wrapperModel.vm.searchKeyUp();
        wrapperModel.vm.searchKeyDown();
        wrapperModel.vm.getSearchResult([{
          value: 'xihu',
          option: {
            value: 'xihu',
            label: 'West Lake',
            code: 100800,
          },
          floor: 2,
          index: 0,
        }]);
        wrapperModel.vm.searchEnter();
        expect(searchResetStub).toBeCalled();
        expect(panelChangeStub).toBeCalled();
        expect(wrapperModel.vm.optStatus).toBeFalsy();
        wrapperModel.vm.clear({ stopPropagation: stopPropagationStub });
        expect(stopPropagationStub).toBeCalled();
        wrapperModel.vm.currentOption = {
          nextPanel: ['xxx'],
        };
        wrapperModel.vm.reset();
        expect(updateValueStub).toBeCalled();
        expect(wrapperModel.vm.result).toEqual([]);
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
          nextPanel: ['xxx'],
        };
        wrapperReset.vm.result = ['zhejiang', 'hangzhou', 'xihu'];
        wrapperReset.vm.reset();
        expect(wrapperReset.vm.result).toEqual(['zhejiang', 'hangzhou', 'xihu']);
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
          nextPanel: [],
          value: ['zhejiang', 'hangzhou', 'xihu'],
        });
        expect(wrapperPanelChange.vm.result).toEqual(['zhejiang', 'hangzhou', 'xihu']);
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
        wrapperSearchReset.vm.searchChange({ value: [], nextPanel: [] }, {});
        expect(wrapperSearchReset.vm.searchHoverIndex).toBe(-1);
        wrapperSearchReset.vm.searchEnter({});
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

  it('updata result', (done) => {
    wrapperUpdataResult.vm.$nextTick(() => {
      try {
        wrapperUpdataResult.vm.panelChange({ value: [], nextPanel: ['xxx'] });
        expect(wrapperUpdataResult.vm.result).toEqual([]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('changeOnSelect', (done) => {
    wrapperChangeOnSelect.vm.$nextTick(() => {
      try {
        wrapperChangeOnSelect.vm.panelChange({ value: ['zhejiang'], nextPanel: ['xxx'] });
        expect(wrapperChangeOnSelect.vm.oldData).toEqual(['zhejiang']);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
