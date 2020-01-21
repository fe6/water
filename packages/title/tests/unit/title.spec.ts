/** @format */

import { mount } from '@vue/test-utils';
import Title from '../../src/title';

describe('Title.vue', () => {
  let wrapperModel: any = null;
  let wrapperDelete: any = null;
  let wrapperMark: any = null;
  let wrapperCodeMark: any = null;
  let wrapperStrong: any = null;
  let wrapperUnderline: any = null;
  let wrapperSuccess: any = null;
  let wrapperLevel: any = null;
  let wrapperBorder: any = null;

  beforeEach(() => {
    wrapperModel = mount(Title, {});
    wrapperDelete = mount(Title, {
      propsData: {
        delete: true,
      },
    });
    wrapperMark = mount(Title, {
      propsData: {
        mark: true,
      },
    });
    wrapperCodeMark = mount(Title, {
      propsData: {
        mark: true,
        code: true,
      },
    });
    wrapperStrong = mount(Title, {
      propsData: {
        strong: true,
      },
    });
    wrapperUnderline = mount(Title, {
      propsData: {
        underline: true,
      },
    });
    wrapperSuccess = mount(Title, {
      propsData: {
        type: 'success',
        underline: true,
      },
    });
    wrapperLevel = mount(Title, {
      propsData: {
        level: 12,
      },
    });
    wrapperBorder = mount(Title, {
      propsData: {
        border: 'right',
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

  it('test level error', (done) => {
    const { vm } = wrapperLevel;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test border error', (done) => {
    const { vm } = wrapperBorder;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
