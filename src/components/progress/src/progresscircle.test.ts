import { shallowMount } from '@vue/test-utils';
import ProgressCircle from './ProgressCircle.vue';

describe('ProgressCircle.vue', () => {
  let progress: any = null;
  let progressColor: any = null;
  let progressColor2: any = null;
  let progressColor3: any = null;
  let progressRadius: any = null;
  let progressDashboard: any = null;

  beforeEach(() => {
    progress = shallowMount(ProgressCircle, {
      propsData: {
        value: 10,
      },
    });
    progressColor = shallowMount(ProgressCircle, {
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
    progressColor2 = shallowMount(ProgressCircle, {
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
    progressColor3 = shallowMount(ProgressCircle, {
      propsData: {
        value: 10,
        color: '#f00',
      },
    });
    progressRadius = shallowMount(ProgressCircle, {
      propsData: {
        value: 10,
        type: 'circle',
        strokeWidth: 8,
      },
    });
    progressDashboard = shallowMount(ProgressCircle, {
      propsData: {
        value: 10,
        type: 'dashboard',
        strokeWidth: 8,
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
        progressColor3.setProps({ value: 111 });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test type is circle', (done) => {
    const { vm } = progressRadius;
    vm.$nextTick(() => {
      try {
        expect(vm.radius).toBe(46);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test type is dashboard', (done) => {
    const { vm } = progressDashboard;
    vm.$nextTick(() => {
      try {
        expect(vm.rate).toBe(0.75);
        // prettier-ignore
        expect(vm.trackPath).toBe(`
    M 50 50
    m 0 46
    a 46 46 0 1 1 0 -92
    a 46 46 0 1 1 0 92
  `);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
