import { shallowMount } from '@vue/test-utils';
import ProgressLine from './ProgressLine.vue';

describe('ProgressLine.vue', () => {
  let progress: any = null;
  let progressColor: any = null;
  let progressColor2: any = null;
  let progressColor3: any = null;
  let progressStatus: any = null;

  beforeEach(() => {
    progress = shallowMount(ProgressLine, {
      propsData: {
        value: 10,
      },
    });
    progressColor = shallowMount(ProgressLine, {
      propsData: {
        value: 10,
        color(percentage: number): string {
          if (percentage < 30) {
            return '#909399';
          }

          if (percentage < 70) {
            return '#e6a23c';
          }
          return '#67c23a';
        },
      },
    });
    progressColor2 = shallowMount(ProgressLine, {
      propsData: {
        value: 10,
        color: [
          { color: '#f56c6c', value: 20 },
          { color: '#e6a23c', value: 40 },
          { color: '#5cb87a', value: 60 },
          { color: '#1989fa', value: 80 },
          { color: '#6f7ad3', value: 100 },
        ],
      },
    });
    progressColor3 = shallowMount(ProgressLine, {
      propsData: {
        value: 10,
        color: '#f00',
      },
    });
    progressStatus = shallowMount(ProgressLine, {
      propsData: {
        value: 10,
        status: 'error',
      },
    });
  });

  it('test render', (done) => {
    const { vm } = progress;
    vm.$nextTick(() => {
      try {
        progress.setProps({ value: 111 });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test color type is function', (done) => {
    const { vm } = progressColor;
    vm.$nextTick(() => {
      try {
        progressColor.setProps({ value: 111 });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test color type is array', (done) => {
    const { vm } = progressColor2;
    vm.$nextTick(() => {
      try {
        progressColor2.setProps({ value: 111 });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test color type is string', (done) => {
    const { vm } = progressColor3;
    vm.$nextTick(() => {
      try {
        expect(vm.isProgress).toBeTruthy();
        progressColor3.setProps({ value: 111 });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Status is error', (done) => {
    const { vm } = progressStatus;
    vm.$nextTick(() => {
      try {
        expect(vm.hasStatus).toBeTruthy();
        progressStatus.setProps({ strokeLinecap: 'round' });
        expect(vm.radiusStyle).toEqual({
          'border-radius': `${vm.strokeWidth / 2}px`,
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
