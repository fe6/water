import { shallowMount } from '@vue/test-utils';
import Input from './Input';

describe('Input.vue', () => {
  let wrapperModel = null;
  let wrapperWatch = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Input, {
      propsData: {
        value: 'true',
      },
    });
    wrapperWatch = shallowMount(Input);
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.changeValue({ target: { value: 'lee' } });
        expect(wrapperModel.vm.inputValue).toEqual('lee');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test watch', (done) => {
    wrapperWatch.vm.$nextTick(() => {
      try {
        wrapperWatch.setProps({ value: 'lee' });
        setTimeout(() => {
          expect(wrapperWatch.vm.inputValue).toBe('lee');
          done();
        }, 10);
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
