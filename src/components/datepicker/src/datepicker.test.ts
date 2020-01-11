/** @format */

import { mount } from '@vue/test-utils';
import DatePicker from './DatePicker.vue';

const ev = { stopPropagation: () => {} };
const testDateValue = '2009-12-10';
const testWeekValue = '2009-12';
const testDate = '2019-10-10';
const testDateTime = '2019-10-10 10:10:10';

describe('DatePicker.vue', () => {
  let pickerDate: any = null;
  let pickerDisabled: any = null;
  let pickerAge: any = null;
  let pickerYear: any = null;
  let pickerMonth: any = null;
  let pickerWeek: any = null;
  let pickerValueFormat: any = null;
  let pickerTypeIsTest: any = null;
  let pickerOpen: any = null;
  let pickerCalendar: any = null;
  let pickerTime: any = null;

  beforeEach(() => {
    pickerDate = mount(DatePicker, {
      propsData: {
        value: testDateValue,
      },
    });
    pickerDisabled = mount(DatePicker, {
      propsData: {
        value: testDateValue,
        disabled: true,
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
    pickerOpen = mount(DatePicker, {
      propsData: {
        open: true,
      },
    });
    pickerCalendar = mount(DatePicker, {
      propsData: {
        calendar: true,
      },
    });
    pickerTime = mount(DatePicker, {
      propsData: {
        value: testDateTime,
        type: 'datetime',
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
          dateWeek: [
            {
              status: 'current',
              disabled: false,
            },
          ],
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
          dateWeek: [
            {
              status: 'next',
              disabled: false,
            },
          ],
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
          dateWeek: [
            {
              status: 'current',
              disabled: false,
            },
          ],
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

  it('test format', (done) => {
    const { vm } = pickerDisabled;
    vm.$nextTick(() => {
      try {
        vm.openPicker();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test open', (done) => {
    const { vm } = pickerOpen;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test calendar', (done) => {
    const { vm } = pickerCalendar;
    vm.$nextTick(() => {
      try {
        vm.pickerValue(1);
        vm.tableType = 'month';
        vm.pickerValue(1);
        vm.tableType = 'year';
        vm.pickerValue(1);
        vm.tableType = 'age';
        vm.pickerValue(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test time', (done) => {
    const { vm } = pickerTime;
    vm.$nextTick(() => {
      try {
        vm.selectTimeFn();
        vm.pickerTableChange({
          item: {
            status: 'current',
            disabled: false,
          },
          type: 'date',
          dateWeek: [
            {
              status: 'current',
              disabled: false,
            },
          ],
        });
        vm.timeChange({
          value: '12:12:12',
        });
        vm.pickerTableChange({
          item: {
            status: 'current',
            disabled: false,
          },
          type: 'month',
          dateWeek: [
            {
              status: 'current',
              disabled: false,
            },
          ],
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
