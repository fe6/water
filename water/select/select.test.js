import { shallowMount } from '@vue/test-utils';
import Option from './Option';
import Select from './Select';
import before from './before';

const testTip = '李红星';
const testObj = { value: testTip, new: true, disabled: false };

const createSingle = shallowMount(Select, {
  propsData: {
    value: ['test'],
  },
  slots: {
    default: [Option],
  },
});

const createTag = shallowMount(Select, {
  propsData: {
    mode: 'tag',
    value: [],
  },
  slots: {
    default: [Option],
  },
});

describe('Select.vue', () => {
  let testFn = null;
  let testSelectClick = null;
  let testSelectDisabledClick = null;
  let testFieldDelete = null;
  let testToggleNewTag = null;
  let testFieldEnter = null;
  let testFieldNoValueEnter = null;
  let testFieldInput = null;
  let testSearchEnter = null;
  let testSearchNoValueEnter = null;
  let testUpdateHock = null;
  let testNoUpdateHock = null;
  let testNoName = null;
  let testName = null;

  beforeEach(() => {
    testFn = createSingle;
    testFieldDelete = createSingle;
    testUpdateHock = createSingle;
    testNoUpdateHock = createSingle;
    testToggleNewTag = createTag;
    testFieldEnter = createTag;
    testFieldNoValueEnter = createTag;
    testName = shallowMount(Select, {
      propsData: {
        value: 'tag',
        prefix: 'prefix ',
        suffix: ' suffix',
      },
      slots: {
        default: [Option],
      },
    });
    testNoName = shallowMount(Select, {
      propsData: {
        mode: 'tag',
      },
      slots: {
        default: [Option],
      },
    });
    testSelectClick = shallowMount(Select, {
      propsData: {
        value: ['test'],
        async before() {
          return before;
        },
      },
      slots: {
        default: [Option],
      },
    });
    testSelectDisabledClick = shallowMount(Select, {
      propsData: {
        value: ['test'],
        disabled: true,
        async before() {
          return before;
        },
      },
      slots: {
        default: [Option],
      },
    });
    testFieldInput = shallowMount(Select, {
      propsData: {
        mode: 'tag',
        value: [],
        search: true,
      },
      slots: {
        default: [Option],
      },
    });
    testSearchEnter = shallowMount(Select, {
      propsData: {
        value: [],
        search: true,
      },
      slots: {
        default: [Option],
      },
    });
    testSearchNoValueEnter = shallowMount(Select, {
      propsData: {
        value: [],
        search: true,
      },
      slots: {
        default: [Option],
      },
    });
  });

  it('test function', (done) => {
    testFn.vm.$nextTick(() => {
      try {
        const resetHoverIndexFn = jest.fn();
        testFn.vm.resetHoverIndex = resetHoverIndexFn;
        const getFocusFn = jest.fn();
        testFn.vm.getFocus = getFocusFn;
        const toggleNewTagFn = jest.fn();
        testFn.vm.toggleNewTag = toggleNewTagFn;
        testFn.vm.removeName({}, []);
        expect(resetHoverIndexFn).toBeCalled();
        expect(getFocusFn).toBeCalled();
        expect(toggleNewTagFn).toBeCalled();
        // test optionBeforeChange
        testFn.vm.optionBeforeChange();
        expect(getFocusFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test fieldDelete', (done) => {
    testFieldDelete.vm.$nextTick(() => {
      try {
        const optionChangeFn = jest.fn();
        testFieldDelete.vm.optionChange = optionChangeFn;
        testFieldDelete.vm.nameTags = [{
          value: 'test',
          disabled: false,
        }];
        testFieldDelete.vm.fieldCanDelate = true;
        testFieldDelete.vm.fieldDelete({
          target: {
            value: 'test',
          },
        });
        expect(optionChangeFn).toBeCalled();
        // test bodyClick
        const setStatusFn = jest.fn();
        testFieldDelete.vm.setStatus = setStatusFn;
        testFieldDelete.vm.bodyClick();
        expect(setStatusFn).toBeCalled();
        // test branch fieldDelete is false
        testFieldDelete.vm.nameTags = [];
        testFieldDelete.setProps({ name: [] });
        testFieldDelete.vm.fieldDelete({
          target: {
            value: '',
          },
        });
        expect(testFieldDelete.vm.fieldCanDelate).toBe(1);
        // disabled is true
        testFieldDelete.vm.nameTags = [{
          value: 'test',
          disabled: true,
        }];
        testFieldDelete.vm.fieldDelete({
          target: {
            value: 'test',
          },
        });
        expect(optionChangeFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test toggleNewTag', (done) => {
    testToggleNewTag.vm.$nextTick(() => {
      try {
        testToggleNewTag.vm.fieldValue = testTip;
        testToggleNewTag.vm.slotsData = [testObj];
        testToggleNewTag.vm.toggleNewTag(testTip);
        expect(testToggleNewTag.vm.newTags).toEqual([testObj]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test fieldEnter', (done) => {
    testFieldEnter.vm.$nextTick(() => {
      try {
        testFieldEnter.vm.fieldValue = testTip;
        testFieldEnter.vm.slotsData = [testObj];
        testFieldEnter.vm.resetHoverIndex();
        const resetHoverIndexFn = jest.fn();
        testFieldEnter.vm.resetHoverIndex = resetHoverIndexFn;
        testFieldEnter.vm.fieldEnter({ target: { value: testTip } });
        testFieldEnter.vm.$nextTick(() => {
          expect(resetHoverIndexFn).toBeCalled();
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test fieldEnter no value', (done) => {
    testFieldNoValueEnter.vm.$nextTick(() => {
      try {
        testFieldNoValueEnter.vm.resetHoverIndex();
        const setFieldValueFn = jest.fn();
        testFieldNoValueEnter.vm.setFieldValue = setFieldValueFn;
        testFieldNoValueEnter.vm.optHoverIndex = -1;
        testFieldNoValueEnter.vm.fieldEnter({ target: { value: '' } });
        testFieldNoValueEnter.vm.$nextTick(() => {
          expect(setFieldValueFn).not.toBeCalled();
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test fieldInput', (done) => {
    testFieldInput.vm.$nextTick(() => {
      try {
        // test setInputWidth
        const resetHoverIndexFn = jest.fn();
        testFieldInput.vm.resetHoverIndex = resetHoverIndexFn;
        testFieldInput.vm.setInputWidth();
        testFieldInput.vm.$nextTick(() => {
          expect(testFieldInput.vm.fieldWidth).toBe('0px');
          expect(resetHoverIndexFn).toBeCalled();
        });

        // test input
        const setInputWidthFn = jest.fn();
        testFieldInput.vm.setInputWidth = setInputWidthFn;
        testFieldInput.vm.fieldInput({ target: { value: testTip } });
        expect(setInputWidthFn).toBeCalled();
        // test focus
        const focusFn = jest.fn();
        testFieldInput.vm.$on('focus', focusFn);
        testFieldInput.vm.inputFocus({ target: { value: testTip } });
        expect(focusFn).toBeCalled();
        expect(testFieldInput.vm.hideTimer).toBe(null);
        // test blur
        const blurFn = jest.fn();
        testFieldInput.vm.$on('blur', blurFn);
        const setFieldValueFn = jest.fn();
        testFieldInput.vm.setFieldValue = setFieldValueFn;
        testFieldInput.vm.inputBlur({ target: { value: testTip } });
        expect(blurFn).toBeCalled();
        setTimeout(() => {
          expect(setFieldValueFn).toBeCalled();
          done();
        }, 200);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test searchEnter', (done) => {
    testSearchEnter.vm.$nextTick(() => {
      try {
        testSearchEnter.vm.fieldValue = testTip;
        testSearchEnter.vm.slotsData = [testObj];
        // 有移动索引的情况
        testSearchEnter.vm.resetHoverIndex();
        testSearchEnter.vm.searchEnter({ target: { value: testTip } });
        // 模拟数据
        const setFieldValueFn = jest.fn();
        testSearchEnter.vm.setFieldValue = setFieldValueFn;
        const setStatusFn = jest.fn();
        testSearchEnter.vm.setStatus = setStatusFn;
        const resetHoverIndexFn = jest.fn();
        testSearchEnter.vm.resetHoverIndex = resetHoverIndexFn;
        // test searchEnter
        testSearchEnter.vm.searchEnter({ target: { value: testTip } });
        expect(setFieldValueFn).toBeCalled();
        expect(setStatusFn).toBeCalled();
        expect(resetHoverIndexFn).toBeCalled();
        //test searchInput
        testSearchEnter.vm.searchInput({ target: { value: testTip } });
        expect(setFieldValueFn).toBeCalled();
        // test keyUp
        testSearchEnter.vm.keyUp();
        expect(testSearchEnter.vm.optHoverIndex).toBe(0);
        // test keyDown
        testSearchEnter.vm.keyDown();
        expect(testSearchEnter.vm.optHoverIndex).toBe(0);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test fieldEnter no value', (done) => {
    testSearchNoValueEnter.vm.$nextTick(() => {
      try {
        testSearchNoValueEnter.vm.resetHoverIndex();
        const optionChangeFn = jest.fn();
        testSearchNoValueEnter.vm.optionChange = optionChangeFn;
        testSearchNoValueEnter.vm.optHoverIndex = -1;
        testSearchNoValueEnter.vm.searchEnter({ target: { value: '' } });
        testSearchNoValueEnter.vm.$nextTick(() => {
          expect(optionChangeFn).not.toBeCalled();
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test selectClick', (done) => {
    testSelectClick.vm.$nextTick(() => {
      try {
        const selElem = testSelectClick.find('.w-select');
        selElem.trigger('click');
        expect(testSelectClick.vm.optStatus).toBe(false);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test selectClick', (done) => {
    testSelectDisabledClick.vm.$nextTick(() => {
      try {
        const selElem = testSelectDisabledClick.find('.w-select');
        selElem.trigger('click');
        expect(testSelectDisabledClick.vm.optStatus).toBe(false);
        const focusFn = jest.fn();
        testSelectDisabledClick.vm.$refs = {
          single: {
            focus: focusFn,
          },
        };
        testSelectDisabledClick.vm.fieldValue = '11111';
        testSelectDisabledClick.vm.getFocus();
        // test 没有 ref 不获取焦点
        expect(focusFn).not.toBeCalled();
        expect(testSelectDisabledClick.vm.fieldWidth).toBe(0);
        testSelectDisabledClick.vm.setStatus();
        expect(testSelectDisabledClick.vm.optStatus).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test updateHock', (done) => {
    testUpdateHock.vm.$nextTick(() => {
      try {
        testUpdateHock.vm.nameTags = [testObj, testObj];
        testUpdateHock.vm.updateHock([testObj], []);
        expect(testUpdateHock.vm.nameTags).toEqual([]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test no updateHock', (done) => {
    testNoUpdateHock.vm.$nextTick(() => {
      try {
        const resetHoverIndexFn = jest.fn();
        testNoUpdateHock.vm.resetHoverIndex = resetHoverIndexFn;
        testNoUpdateHock.vm.updateHock([], []);
        expect(resetHoverIndexFn).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test no name', (done) => {
    testNoName.vm.$nextTick(() => {
      try {
        expect(testNoName.vm.name).toEqual([]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test string name', (done) => {
    testName.vm.$nextTick(() => {
      try {
        expect(testName.vm.name).toEqual('prefix tag suffix');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
