import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '动态加载选项',
  desc: '配合 <code>before</code> 属性。',
  code: '<w-cascader v-model="loadingValue" :loading="loadingStatus" :before="beforeHandle" :options="loadingOptions" :change="loadingChange"></w-cascader>',
  js: `{
  data() {
    return {
      loadingValue: [],
      loadingStatus: false,
      loadingOptions: [],
      loadingGetDataTime: 1,
    };
  },
  methods: {
    beforeHandle(a) {
      if (!this.loadingOptions.length) {
        this.loadingStatus = true;
        return new Promise((resolve) => {
          setTimeout(() => {
            this.loadingOptions.push({
              value: 'beijing',
              label: 'Beijing',
              code: 300392,
            });
            this.loadingOptions.push({
              value: 'nanjing',
              label: 'Nanjing',
              code: 300392,
            });
            this.loadingStatus = false;
            resolve();
          }, 2000);
        });
      }
      return new Promise((resolve) => {
        resolve();
      });
    },
    loadingChange(ctx) {
      const {
        options,
        item,
        index,
        value,
        ev,
      } = ctx;
      this.loadingValue = value;
      if (this.loadingGetDataTime) {
        this.loadingGetDataTime = 0;
        options.splice(index, 1, {
          ...item,
          loading: true,
        });
        setTimeout(() => {
          options.splice(index, 1, {
            ...item,
            loading: false,
            children: [
              {
                value: 'dongcheng',
                label: 'Dong Cheng',
                code: 300392,
              },
            ],
          });
        }, 2000);
        ev.stopPropagation();
      }
    },
  },
}`,
};

export default base;
