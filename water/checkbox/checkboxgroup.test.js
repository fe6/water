import { shallow, mount } from 'vue-test-utils';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

describe('CheckboxGroup.vue', () => {
  let wrapperRender = null;
  let wrapperOpt = null;
  let wrapperHasFormat = null;


  beforeEach(() => {
    wrapperRender = mount(CheckboxGroup, {
      propsData: {
        options: [
          { value: 'Apple', age: '18岁', on: true },
        ],
      },
      attachToDocument: true,
    });
    wrapperOpt = mount(CheckboxGroup);
    wrapperHasFormat = shallow(CheckboxGroup, {
      propsData: {
        format: 'age',
        options: [
          { value: 'Pear', age: '38岁' },
        ],
        disabled: true,
      },
    });
  });

  it('test render', (done) => {
    wrapperRender.vm.$nextTick(() => {
      try {
        const renderElem = wrapperRender.find('.w-checkbox');
        renderElem.trigger('click');
        const stub = jest.fn();
        wrapperRender.setMethods({ change: stub });
        wrapperRender.find(Checkbox).vm.$emit('change', [
          { value: 'Apple', age: '18岁', on: true },
        ], false, { value: 'Apple', age: '18岁', on: false });
        expect(stub).toBeCalledWith([], false, { value: 'Apple', age: '18岁', on: false });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test options', (done) => {
    wrapperOpt.vm.$nextTick(() => {
      try {
        expect(wrapperOpt.vm.options).toEqual([]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test hasFormat', (done) => {
    wrapperHasFormat.vm.$nextTick(() => {
      try {
        expect(wrapperHasFormat.vm.format).toEqual('age');
        expect(wrapperHasFormat.vm.disabled).toEqual(true);
        wrapperHasFormat.vm.disabled = false;
        expect(wrapperHasFormat.vm.hasFormat).toBeFalsy();
        wrapperHasFormat.vm.checkFn({ value: 'Pear', age: '38岁' });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
