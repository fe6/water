<template>
  <div>
    {{base}}=
    {{base1}}=
    <p>
      <Radio
        hoverColor="#f00"
        checkColor="#0f0"
        v-model="base1"
        :label="true"
      >定制</Radio>
    </p>
    <p>
      <Radio
        disabled
      >123</Radio>
      <Radio
        disabled
        value="true"
        label="true"
      >123</Radio>
    </p>
    <p>
      <Radio
        v-model="base"
        v-for="opt in options"
        :key="opt.age"
        :label="opt.label"
        :before="beforeLoading.bind(this, opt)"
        :loading="opt.loading"
        :change="change"
        @change="change"
      >{{opt.value}}</Radio>
      <br>
      {{group}}
      <br>
      <RadioGroup
        :options="options"
        v-model="group"
        :before="beforeLoading"
        :change="change"
        @change="change"
      />
      <button @click="group = 'tv'">设置电视</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Radio from '@/components/radio/Radio.vue';
import RadioGroup from '@/components/radio/RadioGroup.vue';

interface GroupOptsEntity {
  value: string;
  age: string;
  label: string;
  disabled?: boolean;
  more?: boolean;
}

@Component({
  components: {
    Radio,
    RadioGroup,
  },
})
export default class RadioView extends Vue {
  base: string = 'apple';

  base1: boolean = false;

  options: any[] = [
    {
      value: '苹果',
      label: 'apple',
      loading: false,
      age: 18,
    },
    {
      value: '相机',
      label: 'camera',
      loading: false,
      age: 1,
    },
    {
      value: '电视',
      label: 'tv',
      loading: false,
      age: 90,
    },
  ];

  loading: boolean = false;

  group: string = 'apple';

  /* eslint-disable class-methods-use-this */
  change(params: any) {
    console.log(params, 'chnage');
  }

  /* eslint-disable class-methods-use-this */
  beforeLoading(opt: any) {
    /* eslint-disable no-alert */
    opt.loading = true;
    return new Promise((resolve) => {
      setTimeout(() => {
        opt.loading = false;
        if (window.confirm('你确定选择吗？')) {
          resolve();
        }
      }, 2000);
    });
  }
}
</script>
