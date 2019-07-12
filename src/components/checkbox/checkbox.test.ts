import { mount } from '@vue/test-utils';
import Checkbox from './Checkbox.vue';
import CheckboxGroup from './CheckboxGroup.vue';

describe('Checkbox.vue', () => {
  let cb: any = null;
  let labelEmpty: any = null;
  let label1: any = null;
  let label2: any = null;
  let label3: any = null;
  let color: any = null;
  let disabled: any = null;
  let group1: any = null;
  let group2: any = null;
  let groupEmpty: any = null;
  let groupDisabled: any = null;

  beforeEach(() => {
    cb = mount(Checkbox);
    label1 = mount(Checkbox, {
      propsData: {
        value: 'true',
        label: 'true',
      },
    });
    label2 = mount(Checkbox, {
      propsData: {
        value: 1,
        label: 1,
      },
    });
    label3 = mount(Checkbox, {
      propsData: {
        value: true,
        label: true,
      },
    });
    labelEmpty = mount(Checkbox, {
      propsData: {
        value: true,
      },
    });
    color = mount(Checkbox, {
      propsData: {
        checkColor: '#f00',
        hoverColor: '#0f0',
        textColor: '#0f0',
      },
    });
    disabled = mount(Checkbox, {
      propsData: {
        disabled: true,
      },
    });
    group1 = mount(CheckboxGroup, {
      propsData: {
        options: [{
          value: 'Apple',
          label: 'Apple',
          age: '18岁',
        }],
      },
    });
    group2 = mount(CheckboxGroup, {
      propsData: {
        options: [{
          value: 'Apple',
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

  it('test Checkbox label1', (done) => {
    label1.vm.$nextTick(() => {
      try {
        expect(label1.vm.status).toBeTruthy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Checkbox label2', (done) => {
    label2.vm.$nextTick(() => {
      try {
        expect(label2.vm.status).toBeTruthy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Checkbox label3', (done) => {
    label3.vm.$nextTick(() => {
      try {
        expect(label3.vm.status).toBeTruthy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Checkbox label empty', (done) => {
    labelEmpty.vm.$nextTick(() => {
      try {
        expect(labelEmpty.vm.status).toBeTruthy();

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
        expect(color.vm.textColorStyle).toEqual({ color: '#0f0' });
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
        expect(disabled.vm.status).toBeFalsy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test CheckboxGroup', (done) => {
    group1.vm.$nextTick(() => {
      try {
        const checkboxElem = group1.find('.w-checkbox');
        checkboxElem.trigger('click');
        checkboxElem.trigger('click');

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test CheckboxGroup', (done) => {
    group2.vm.$nextTick(() => {
      try {
        const checkboxElem = group2.find('.w-checkbox');
        checkboxElem.trigger('click');
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
        expect(checkboxElem.vm.status).toBeFalsy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
