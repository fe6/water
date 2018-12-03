import { shallow } from 'vue-test-utils';
import Tag from './Tag';

describe('Tag.vue', () => {
  let wrapperModel = null;
  let wrapperClose = null;
  let wrapperColorSection = null;

  beforeEach(() => {
    wrapperModel  = shallow(Tag, {
      propsData: {
        size: 'small',
        disabled: false,
      },
    });
    wrapperClose  = shallow(Tag, {
      propsData: {
        closable: true,
      },
    });
    wrapperColorSection  = shallow(Tag, {
      propsData: {
        color: '#eb2f96',
        colorType: 'section',
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
        wrapperClose.vm.close = stub;
        const button = wrapperClose.find('.w-tag-close');
        button.trigger('click');
        expect(stub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
