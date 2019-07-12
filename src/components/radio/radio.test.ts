import { mount } from '@vue/test-utils';
import Radio from './Radio.vue';
import RadioGroup from './RadioGroup.vue';

describe('Radio.vue', () => {
  let cb: any = null;
  let borderColor: any = null;
  let bgColor: any = null;
  let disabled: any = null;
  let group: any = null;
  let groupEmpty: any = null;

  beforeEach(() => {
    cb = mount(Radio);
    borderColor = mount(Radio, {
      propsData: {
        hoverColor: '#f00',
        textColor: '#f00',
      },
    });
    bgColor = mount(Radio, {
      propsData: {
        checkColor: '#f00',
        label: 'a',
        value: 'a',
      },
    });
    disabled = mount(Radio, {
      propsData: {
        disabled: true,
        value: 'a',
      },
    });
    group = mount(RadioGroup, {
      propsData: {
        value: 'a',
        options: [{
          value: 'Apple',
          label: 'Apple',
          age: '18岁',
        }],
      },
    });
    groupEmpty = mount(RadioGroup);
  });

  it('test Radio', (done) => {
    cb.vm.$nextTick(() => {
      try {
        expect(cb.vm.borderColorStyle).toBe('');
        expect(cb.vm.bgColorStyle).toBe('');

        const checkboxElem = cb.find('.w-radio');
        checkboxElem.trigger('click');
        expect(cb.vm.status).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Radio hoverColor', (done) => {
    borderColor.vm.$nextTick(() => {
      try {
        const checkboxElem = borderColor.find('.w-radio');
        checkboxElem.trigger('mouseover');
        expect(borderColor.vm.borderColorStyle).toBe('border-color: #f00');
        expect(borderColor.vm.textColorStyle).toBe('color: #f00');

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Radio checkColor', (done) => {
    bgColor.vm.$nextTick(() => {
      try {
        expect(bgColor.vm.borderColorStyle).toBe('border-color: #f00');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Radio disabled', (done) => {
    disabled.vm.$nextTick(() => {
      try {
        disabled.vm.clickFn({});
        expect(disabled.vm.value).toBe('a');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test RadioGroup', (done) => {
    group.vm.$nextTick(() => {
      try {
        const checkboxElem = group.find('.w-radio');
        checkboxElem.trigger('click');
        expect(group.vm.value).toBe('a');
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
});
