import { mount } from 'vue-test-utils';
import Notification from './Notice';

describe('Notification.vue', () => {
  let wrapper = null;
  let wrapperNoticeOut = null;
  let branchNoticeOut = null;
  let wrapperClose = null;
  let branchPrevent = null;
  let wrapperMoving = null;
  let wrapperPlacement = null;

  beforeEach(() => {
    wrapper = mount(Notification, { props: {} });
    wrapper.vm.add({
      title: 'ttt',
      content: 'ssss',
    });
    wrapperClose = mount(Notification, { props: {} });
    wrapperClose.vm.add({
      title: 'ttt',
      content: 'ssss',
      duration: 0,
    });
    wrapperNoticeOut = mount(Notification, { props: {} });
    wrapperNoticeOut.vm.add({
      title: 'ttt',
      content: 'ssss',
    });
    branchNoticeOut = mount(Notification, { props: {} });
    branchNoticeOut.vm.add({
      title: 'ttt',
      content: 'ssss',
      duration: 0,
    });
    branchPrevent = mount(Notification, { props: {} });
    branchPrevent.vm.add({
      title: 'ttt',
      content: 'ssss',
    });
    wrapperMoving = mount(Notification, { props: {} });
    wrapperPlacement = mount(Notification, { props: {} });
  });

  it('test notice over', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const notice = wrapper.find('.w-notification-notice');
        notice.trigger('mouseover');
        expect(wrapper.vm.timer).toBe(null);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test notice click', (done) => {
    const clickFn = jest.fn();
    wrapper.vm.$nextTick(() => {
      try {
        const notice = wrapper.find('.w-notification-notice');
        wrapper.vm.click = clickFn;
        notice.trigger('click');
        expect(clickFn).toBeCalled();
        wrapper.vm.bindAutoClose();
        expect(wrapper.vm.closed).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test notice close', (done) => {
    const closeFn = jest.fn();
    wrapperClose.vm.$nextTick(() => {
      try {
        const notice = wrapperClose.find('.w-notification-close');
        wrapperClose.vm.close = closeFn;
        notice.trigger('click');
        expect(closeFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test notice out', (done) => {
    wrapperNoticeOut.vm.$nextTick(() => {
      try {
        const autoCloseFn = jest.fn();
        wrapperNoticeOut.vm.bindAutoClose = autoCloseFn;
        wrapperNoticeOut.vm.closed = false;
        wrapperNoticeOut.vm.noticeOut();
        expect(autoCloseFn).toBeCalled();
        wrapperNoticeOut.vm.placement = 'topLeft';
        expect(wrapperNoticeOut.vm.leftSign).toBe('-');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test branch preventAutoClose', (done) => {
    const removeFn = jest.fn();
    jest.useFakeTimers();
    branchPrevent.vm.$nextTick(() => {
      try {
        expect(setTimeout).toHaveBeenCalledTimes(0);
        branchPrevent.vm.noticeOver();
        branchPrevent.vm.removeNotice = removeFn;
        expect(setTimeout).not.toHaveBeenCalled();
        expect(removeFn).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test branch preventAutoClose', (done) => {
    wrapperMoving.vm.moving = true;
    wrapperMoving.vm.add({
      title: 'ttt',
      content: 'ssss',
    });
    wrapperMoving.vm.$nextTick(() => {
      try {
        expect(wrapperMoving.vm.notificationStyle).toEqual({ right: '24px', top: '24px' });
        expect(wrapperMoving.vm.moving).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test branch preventAutoClose', (done) => {
    wrapperPlacement.vm.$nextTick(() => {
      try {
        wrapperPlacement.vm.placement = 'rttrt';
        wrapperPlacement.vm.matchDirection();
        expect(wrapperPlacement.vm.notificationStyle).toEqual({});
        wrapperPlacement.vm.duration = 0;
        wrapperPlacement.vm.bindAutoClose();
        expect(wrapperPlacement.vm.closed).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
