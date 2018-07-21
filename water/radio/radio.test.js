import { shallow, mount } from 'vue-test-utils';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import before from './before';

describe('Radio.vue', () => {
  let wrapperBase = null;
  let wrapperRadioDisabled = null;
  let wrapperRadio99 = null;
  let wrapperRadio82 = null;
  let wrapperRadio71 = null;
  let wrapperRadio65 = null;
  let wrapper = null;

  const createCmp = propsData => mount(RadioGroup, {
    slots: {
      default: [
        Radio,
        Radio
      ],
    },
    propsData,
  })

  beforeEach(() => {
    wrapper = createCmp({
      on: 1,
    });

    wrapperBase = createCmp({
      on: 1,
      defaultChecked: false,
    });

    wrapperRadioDisabled = createCmp({
      on: 1,
    });

    wrapperRadio99 = createCmp({
      on: 1,
    });

    wrapperRadio82 = createCmp({
      on: 1,
    });

    wrapperRadio65 = createCmp({
      on: 1,
    });

    wrapperRadio71 = createCmp({
      on: 1,
    });
  });

  it('测试 animationend', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const switchElem = wrapper.find('.w-radio');
        wrapper.vm.$children[0].removeClickName();
        expect(wrapper.vm.$children[0].isClick).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('测试 defaultChecked 74 line', (done) => {
    wrapperBase.vm.$nextTick(() => {
      try {
        const switchElem = wrapperBase.find('.w-radio');
        switchElem.trigger('click');
        expect(wrapperBase.vm.$children[0].defaultChecked).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('测试 96 104 line', (done) => {
    wrapperRadioDisabled.vm.$nextTick(() => {
      try {
        // 是否触发 watch disabled
        wrapperRadioDisabled.vm.$children[0].disabled = true;
        wrapperRadioDisabled.vm.$children[0].setDisabledOneStatus(true);
        expect(wrapperRadioDisabled.vm.$children[0].disabled).toBeTruthy();
        expect(wrapperRadioDisabled.vm.$children[0].disabledStatus).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('测试 99 line', (done) => {
    wrapperRadio99.vm.$nextTick(() => {
      try {
        wrapperRadio99.vm.$children[0].setLoadingStatus(true);
        expect(wrapperRadio99.vm.$children[0].loadingStatus).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('测试 65 line', (done) => {
    wrapperRadio65.vm.$nextTick(() => {
      try {
        const switchElem = wrapperRadioDisabled.find('.w-radio');
        wrapperRadio65.vm.$children[0].disabledStatus =false;
        wrapperRadio65.vm.$children[0].status =false;
        wrapperRadio65.vm.loading =false;
        const childClickdFn = jest.fn();
        wrapperRadio65.vm.childClick = childClickdFn;
        wrapperRadio65.update();
        switchElem.trigger('click');
        expect(wrapperRadio65.vm.$children[0].isClick).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('测试 71 line', (done) => {
    wrapperRadio71.vm.$nextTick(() => {
      try {
        const switchElem = wrapperRadioDisabled.find('.w-radio');
        wrapperRadio71.vm.$children[0].status = true;
        expect(wrapperRadio71.vm.$children[0].clickFn({})).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
