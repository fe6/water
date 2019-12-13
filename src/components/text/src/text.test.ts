import { mount } from '@vue/test-utils';
import Text from './Text.vue';

describe('Text.vue', () => {
  let wrapperModel: any = null;
  let wrapperDelete: any = null;
  let wrapperMark: any = null;
  let wrapperCodeMark: any = null;
  let wrapperStrong: any = null;
  let wrapperUnderline: any = null;
  let wrapperSuccess: any = null;

  beforeEach(() => {
    wrapperModel = mount(Text, {});
    wrapperDelete = mount(Text, {
      propsData: {
        delete: true,
      },
    });
    wrapperMark = mount(Text, {
      propsData: {
        mark: true,
      },
    });
    wrapperCodeMark = mount(Text, {
      propsData: {
        mark: true,
        code: true,
      },
    });
    wrapperStrong = mount(Text, {
      propsData: {
        strong: true,
      },
    });
    wrapperUnderline = mount(Text, {
      propsData: {
        underline: true,
      },
    });
    wrapperSuccess = mount(Text, {
      propsData: {
        type: 'success',
        underline: true,
      },
    });
  });

  it('render', (done) => {
    const { vm } = wrapperModel;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test delete', (done) => {
    const { vm } = wrapperDelete;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test mark', (done) => {
    const { vm } = wrapperMark;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test mark and code', (done) => {
    const { vm } = wrapperCodeMark;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test strong', (done) => {
    const { vm } = wrapperStrong;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test underline', (done) => {
    const { vm } = wrapperUnderline;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test success', (done) => {
    const { vm } = wrapperSuccess;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
