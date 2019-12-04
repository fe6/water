import { mount } from '@vue/test-utils';
import Calendar from './Calendar.vue';

describe('Calendar.vue', () => {
  let wrapperRender: any = null;
  let wrapperShow: any = null;

  beforeEach(() => {
    wrapperRender = mount(Calendar, {
      propsData: {},
    });
    wrapperShow = mount(Calendar, {
      propsData: {},
    });
  });

  it('test render', (done) => {
    const { vm } = wrapperRender;
    vm.$nextTick(() => {
      try {
        vm.handleNextYear();
        vm.handlePrevYear();
        vm.handlePrevMonth();
        vm.handleNextMonth();
        vm.handleAge();
        vm.handleYear();
        vm.handleMonth();
        vm.handleDate();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test show some', (done) => {
    const { vm } = wrapperShow;
    vm.$nextTick(() => {
      try {
        wrapperShow.setProps({
          showDate: true,
        });
        expect(vm.newShowDate).toBeTruthy();
        wrapperShow.setProps({
          showDate: false,
          type: 'date',
        });
        expect(vm.newShowDate).toBeTruthy();

        wrapperShow.setProps({
          showMonth: false,
          type: 'month',
        });
        expect(vm.newShowMonth).toBeTruthy();
        wrapperShow.setProps({
          showMonth: true,
          type: 'month',
        });
        expect(vm.newShowMonth).toBeTruthy();

        wrapperShow.setProps({
          showYear: false,
          type: 'year',
        });
        expect(vm.newShowYear).toBeTruthy();
        wrapperShow.setProps({
          showYear: true,
          type: 'year',
        });
        expect(vm.newShowYear).toBeTruthy();

        wrapperShow.setProps({
          showAge: false,
          type: 'age',
        });
        expect(vm.newShowAge).toBeTruthy();
        wrapperShow.setProps({
          showAge: true,
          type: 'age',
        });
        expect(vm.newShowAge).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
