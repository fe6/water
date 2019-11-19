import { shallowMount } from '@vue/test-utils';
import Tag from './Tag.vue';

describe('Tag.vue', () => {
  let wrapperModel: any = null;
  let wrapperClose: any = null;
  let wrapperLoading: any = null;
  let wrapperSection: any = null;
  let wrapperAllColor: any = null;
  let wrapperStop: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Tag, {
      propsData: {
        size: 'small',
        disabled: false,
      },
    });
    wrapperClose = shallowMount(Tag, {
      propsData: {
        closable: true,
      },
    });
    wrapperLoading = shallowMount(Tag, {
      propsData: {
        size: 'small',
        loading: true,
      },
    });
    wrapperAllColor = shallowMount(Tag, {
      propsData: {
        color: '#1996f9',
      },
    });
    wrapperSection = shallowMount(Tag, {
      propsData: {
        color: '#1996f9',
        colorType: 'section',
      },
    });
    wrapperStop = shallowMount(Tag, {
      propsData: {
        closable: true,
        stop: true,
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.value).toBeFalsy();
        expect(wrapperModel.vm.sizeValue).toBe('small');
        expect(wrapperModel.vm.disabledValue).toBeFalsy();
        const button = wrapperModel.find('.w-tag');
        button.trigger('click');
        expect(wrapperModel.vm.clicked).toBeTruthy();
        button.trigger('animationend');
        expect(wrapperModel.vm.clicked).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('close callback', (done) => {
    wrapperClose.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapperClose.setProps({ close: stub });
        const close = wrapperClose.find('.w-tag-close');
        close.trigger('click');
        expect(stub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('loading', (done) => {
    wrapperLoading.vm.$nextTick(() => {
      try {
        expect(wrapperLoading.vm.loadLarge).toBeFalsy();
        expect(wrapperLoading.vm.sectionLoad).toBeFalsy();
        expect(wrapperLoading.vm.loadSmall).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('color section', (done) => {
    wrapperSection.vm.$nextTick(() => {
      try {
        expect(wrapperSection.vm.isAllValue).toBeFalsy();
        expect(wrapperSection.vm.colorTypeValue).toBe('section');
        expect(wrapperSection.vm.borderColorValue).toBe(
          'rgba(25, 150, 249, 1)'
        );
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('color all', (done) => {
    wrapperAllColor.vm.$nextTick(() => {
      try {
        expect(wrapperAllColor.vm.fontColorValue).toBe('rgb(25, 150, 249)');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('stopPropagation', (done) => {
    wrapperStop.vm.$nextTick(() => {
      try {
        const closeStub = jest.fn();
        const clsoe = wrapperStop.find('.w-tag-close');
        clsoe.trigger('click', { stopPropagation: closeStub });
        expect(closeStub).toBeCalled();
        const tagStub = jest.fn();
        const tag = wrapperStop.find('.w-tag');
        tag.trigger('click', { stopPropagation: tagStub });
        expect(tagStub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
