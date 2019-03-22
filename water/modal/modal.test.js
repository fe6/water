import { mount } from '@vue/test-utils';
import Modal from './Modal';
import before from './before';

describe('Modal.vue', () => {
  let wrapper = null;
  let wrapper1 = null;
  let wrapperBefore = null;
  let wrapperNoBefore = null;
  let wrapperCancel = null;
  let wrapperChangeStatus = null;
  let wrapperMaskClosable = null;
  let wrapperLoading = null;
  let wrapperKeyUpFn = null;

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
  });

  it('test watch', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const cancelFn = jest.fn();
        wrapper.vm.cancelFn = cancelFn;
        wrapper.vm.maskClosable = true;
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
        wrapper1.setProps({ loadingValue: false });
        wrapper1.vm.status = true;
        wrapper1.vm.keyUpFn({ keyCode: 27 });
        expect(wrapper1.vm.changeStatus).toBeCalled();
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
        const okElem = wrapperBefore.find('.w-modal-button-ok');
        okElem.trigger('click');
        setTimeout(() => {
          expect(changeFn).toBeCalled();
          done();
        }, 1000);
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
        const cancelElem = wrapperCancel.find('.w-modal-button-cancel');
        cancelElem.trigger('click');
        setTimeout(() => {
          expect(changeFn).toBeCalled();
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
        wrapperChangeStatus.vm.$on('ok', okFn);
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
});
