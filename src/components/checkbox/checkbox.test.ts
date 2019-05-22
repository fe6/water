import { mount } from '@vue/test-utils';
import Checkbox from './Checkbox.vue';
import CheckboxGroup from './CheckboxGroup.vue';

describe('Checkbox.vue', () => {
  let cb: any = null;
  let color: any = null;
  let disabled: any = null;
  let group: any = null;
  let groupEmpty: any = null;
  let groupDisabled: any = null;

  beforeEach(() => {
    cb = mount(Checkbox);
    color = mount(Checkbox, {
      propsData: {
        checkColor: '#f00',
        hoverColor: '#0f0',
      },
    });
    disabled = mount(Checkbox, {
      propsData: {
        disabled: true,
      },
    });
    group = mount(CheckboxGroup, {
      propsData: {
        options: [{
          value: 'Apple',
          label: 'Apple',
          age: '18岁',
        }],
      },
    });
    groupEmpty = mount(CheckboxGroup);
    groupDisabled = mount(CheckboxGroup, {
      propsData: {
        options: [{
          value: 'Apple',
          label: 'Apple',
          age: '18岁',
        }],
        disabled: true,
      },
    });
  });

  it('test Checkbox', (done) => {
    cb.vm.$nextTick(() => {
      try {
        expect(cb.vm.colorStyle).toEqual({});

        cb.vm.status = true;
        cb.vm.setValue(true);
        expect(cb.vm.status).toBe(true);

        const checkboxElem = cb.find('.w-checkbox');
        checkboxElem.trigger('click');
        expect(cb.vm.status).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Checkbox color', (done) => {
    color.vm.$nextTick(() => {
      try {
        const checkboxElem = color.find('.w-checkbox');
        checkboxElem.trigger('click');
        expect(color.vm.colorStyle).toEqual({ backgroundColor: '#f00', borderColor: '#f00' });

        checkboxElem.trigger('mouseover');
        expect(color.vm.colorStyle).toEqual({ backgroundColor: '#f00', borderColor: '#f00' });

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Checkbox disabled', (done) => {
    disabled.vm.$nextTick(() => {
      try {
        const checkboxElem = disabled.find('.w-checkbox');
        checkboxElem.trigger('click');
        expect(disabled.vm.status).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test CheckboxGroup', (done) => {
    group.vm.$nextTick(() => {
      try {
        const checkboxElem = group.find('.w-checkbox');
        checkboxElem.trigger('click');
        expect(checkboxElem.vm.status).toBe(true);
        checkboxElem.trigger('click');

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test CheckboxGroup empty', (done) => {
    groupEmpty.vm.$nextTick(() => {
      try {
        expect(groupEmpty.vm.options).toEqual([]);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test CheckboxGroup disabled', (done) => {
    groupDisabled.vm.$nextTick(() => {
      try {
        const checkboxElem = groupDisabled.find('.w-checkbox');
        checkboxElem.trigger('click');
        expect(checkboxElem.vm.status).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
