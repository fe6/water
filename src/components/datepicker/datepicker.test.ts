import { mount } from '@vue/test-utils';
import DatePicker from './DatePicker.vue';

const ev = { stopPropagation: () => {} };
const testDateValue = '2009-12-10';
const testWeekValue = '2009-12';
const testDate = '2019-10-10';

describe('DatePicker.vue', () => {
  let pickerDate: any = null;
  let pickerAge: any = null;
  let pickerYear: any = null;
  let pickerMonth: any = null;
  let pickerWeek: any = null;
  let pickerValueFormat: any = null;
  let pickerTypeIsTest: any = null;

  beforeEach(() => {
    pickerDate = mount(DatePicker, {
      propsData: {
        value: testDateValue,
      },
    });
    pickerAge = mount(DatePicker, {
      propsData: {
        type: 'age',
      },
    });
    pickerYear = mount(DatePicker, {
      propsData: {
        type: 'year',
      },
    });
    pickerMonth = mount(DatePicker, {
      propsData: {
        type: 'month',
      },
    });
    pickerWeek = mount(DatePicker, {
      propsData: {
        value: testWeekValue,
        type: 'week',
      },
    });
    pickerValueFormat = mount(DatePicker, {
      propsData: {
        valueFormat: 'YYYY+MM+DD',
        format: 'YYYY+MM+DD',
      },
    });
    pickerTypeIsTest = mount(DatePicker, {
      propsData: {
        type: 'test',
      },
    });
  });

  jest.useFakeTimers();

  it('test Function in date', (done) => {
    const { vm } = pickerDate;
    vm.$nextTick(() => {
      try {
        vm.popoverClick(ev);
        vm.bodyClick();
        pickerDate.setProps({ value: testDate });
        vm.inputValue = testDate;
        vm.bodyClick();
        vm.openPicker();
        vm.handleMouseOver();
        vm.handleMouseOut();
        vm.clearValue(ev);
        vm.handlePrevYear();
        vm.handleNextYear();
        vm.handleHeaderYear();
        vm.handleNextMonth();
        vm.handlePrevMonth();
        vm.inputChange({ value: testDate });
        jest.runOnlyPendingTimers();
        vm.inputChange({ value: 'testDate' });
        jest.runOnlyPendingTimers();
        vm.inputChange({ value: '' });
        jest.runOnlyPendingTimers();
        vm.inputValue = 'testDate';
        vm.bodyClick();
        vm.handleAge();
        vm.handleYear();
        vm.handleMonth();
        vm.pickerTableChange({
          item: {
            status: 'prev',
            disabled: false,
          },
          dateWeek: [{}],
        });
        vm.pickerTableChange({
          item: {
            status: 'next',
            disabled: false,
          },
          dateWeek: [{}],
        });
        vm.pickerTableChange({
          item: {
            status: 'next',
            disabled: false,
          },
          type: 'age',
          dateWeek: [{}],
        });
        vm.pickerTableChange({
          item: {
            status: 'next',
            disabled: false,
          },
          type: 'year',
          dateWeek: [{}],
        });
        vm.pickerTableChange({
          item: {
            status: 'next',
            disabled: false,
          },
          type: 'month',
          dateWeek: [{}],
        });
        vm.pickerTableChange({
          item: {
            status: 'next',
            disabled: true,
          },
        });
        vm.$nextTick(() => {
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Function in age', (done) => {
    const { vm } = pickerAge;
    vm.$nextTick(() => {
      try {
        vm.handleHeaderYear();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Function in year', (done) => {
    const { vm } = pickerYear;
    vm.$nextTick(() => {
      try {
        vm.handleHeaderYear();
        vm.returnModel({
          type: 'age',
          value: '1999',
        });
        vm.returnModel({
          type: 'year',
          value: '1999',
        });
        vm.pickerTableChange({
          item: {
            status: 'current',
            disabled: false,
          },
          type: 'year',
          dateWeek: [{
            status: 'current',
            disabled: false,
          }],
        });
        vm.$nextTick(() => {
          pickerYear.destroy();
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Function in month', (done) => {
    const { vm } = pickerMonth;
    vm.$nextTick(() => {
      try {
        vm.handleHeaderYear();
        vm.pickerTableChange({
          item: {
            status: 'next',
            disabled: false,
          },
          type: 'year',
          dateWeek: [{
            status: 'next',
            disabled: false,
          }],
        });
        vm.$nextTick(() => {
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Function in week', (done) => {
    const { vm } = pickerWeek;
    vm.$nextTick(() => {
      try {
        vm.initInput('2019-10');
        vm.renderTableDateInMonth();
        vm.pickerTableChange({
          item: {
            status: 'current',
            disabled: false,
          },
          dateWeek: [{
            status: 'current',
            disabled: false,
          }],
        });
        vm.$nextTick(() => {
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Function in valueformat', (done) => {
    const { vm } = pickerValueFormat;
    vm.$nextTick(() => {
      try {
        vm.initFormat();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test format', (done) => {
    const { vm } = pickerTypeIsTest;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
