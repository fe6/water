/** @format */

import { mount } from '@vue/test-utils';
import Modal from './Modal.vue';

const before = () =>
  new Promise((resolve) => {
    resolve();
  });

describe('Modal.vue', () => {
  let wrapper: any = null;
  let wrapper1: any = null;
  let wrapperBefore: any = null;
  let wrapperNoBefore: any = null;
  let wrapperCancel: any = null;
  let wrapperChangeStatus: any = null;
  let wrapperMaskClosable: any = null;
  let wrapperLoading: any = null;
  let wrapperKeyUpFn: any = null;
  let wrapperKeyUpNoEvFn: any = null;

  beforeEach(() => {
    wrapper = mount(Modal, 'sss');
    wrapper1 = mount(Modal, 'sss');
    wrapperChangeStatus = mount(Modal, 'sss');
    wrapperCancel = mount(Modal, 'sss');
    wrapperBefore = mount(Modal, 'sss');
    wrapperNoBefore = mount(Modal, 'sss');
    wrapperMaskClosable = mount(Modal, 'sss');
    wrapperLoading = mount(Modal, 'sss');
    wrapperKeyUpFn = mount(Modal, 'sss');
    wrapperKeyUpNoEvFn = mount(Modal, 'sss');
  });

  it('test watch', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const cancelFn = jest.fn();
        wrapper.vm.cancelFn = cancelFn;
        wrapper.setProps({ maskClosable: true });
        wrapper.vm.wrapClickFn();
        expect(wrapper.vm.cancelFn).toBeCalled();
        // watch
        wrapper.setProps({ value: true });
        setTimeout(() => {
          expect(wrapper.vm.status).toBeTruthy();
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test keyUpFn', (done) => {
    wrapper1.vm.$nextTick(() => {
      try {
        const changeFn = jest.fn();
        wrapper1.vm.changeStatus = changeFn;
        wrapper1.setProps({ loadingValue: false, esc: true });
        wrapper1.vm.status = true;
        wrapper1.vm.keyUpFn({ keyCode: 27 });
        expect(wrapper1.vm.changeStatus).toBeCalled();
        wrapper1.destroy();
        expect(wrapper1.vm.keyUpEvent).toBe(null);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test before', (done) => {
    wrapperBefore.vm.$nextTick(() => {
      try {
        const changeFn = jest.fn();
        wrapperBefore.vm.changeStatus = changeFn;
        wrapperBefore.setProps({ before });
        wrapperBefore.vm.okFn();
        setTimeout(() => {
          expect(wrapperBefore.vm.changeStatus).toBeCalled();
          done();
        }, 500);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test cancel', (done) => {
    wrapperCancel.vm.$nextTick(() => {
      try {
        const changeFn = jest.fn();
        wrapperCancel.vm.changeStatus = changeFn;
        wrapperCancel.vm.cancelFn();
        setTimeout(() => {
          expect(wrapperCancel.vm.changeStatus).toBeCalled();
          done();
        }, 1000);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test changeStatus', (done) => {
    wrapperChangeStatus.vm.$nextTick(() => {
      try {
        const setStatusFn = jest.fn();
        wrapperChangeStatus.vm.setStatus = setStatusFn;
        const okFn = jest.fn();
        wrapperChangeStatus.setProps({ ok: okFn });
        wrapperChangeStatus.vm.changeStatus('ok');
        expect(setStatusFn).toBeCalled();
        expect(okFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test no before', (done) => {
    wrapperNoBefore.vm.$nextTick(() => {
      try {
        const okFn = jest.fn();
        wrapperNoBefore.vm.changeStatus = okFn;
        wrapperNoBefore.vm.okFn();
        expect(okFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test maskClosable', (done) => {
    wrapperMaskClosable.vm.$nextTick(() => {
      try {
        const cancelFn = jest.fn();
        wrapperMaskClosable.setProps({ maskClosable: false });
        wrapperMaskClosable.vm.cancelFn = cancelFn;
        wrapperMaskClosable.vm.wrapClickFn();
        expect(cancelFn).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test loading', (done) => {
    wrapperLoading.vm.$nextTick(() => {
      try {
        const changeFn = jest.fn();
        wrapperLoading.setProps({ loading: true });
        wrapperLoading.vm.changeStatus = changeFn;
        wrapperLoading.vm.cancelFn();
        expect(changeFn).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test keyUpFn', (done) => {
    wrapperKeyUpFn.vm.$nextTick(() => {
      try {
        const changeFn = jest.fn();
        wrapperKeyUpFn.setProps({ loading: true });
        wrapperKeyUpFn.vm.changeStatus = changeFn;
        wrapperKeyUpFn.vm.keyUpFn({ keyCode: 27 });
        expect(changeFn).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test keyUpFn ev', (done) => {
    wrapperKeyUpNoEvFn.vm.$nextTick(() => {
      try {
        wrapperKeyUpNoEvFn.vm.keyUpFn();
        expect(wrapperKeyUpNoEvFn.vm.status).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
