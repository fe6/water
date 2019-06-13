<script lang="ts">
import { VNode } from 'vue';
import {
  Vue,
} from 'vue-property-decorator';

import LoadBar from './bar';

export interface DefaultEntity {
  start: Function;
  finish: Function;
  fail: Function;
}

export interface InstanceEntity {
  start: Function;
  finish: Function;
  fail: Function;
}

let loadlineInstance: any;

const newInstance = (): any => {
  const Instance = new Vue({
    render(h: Function): VNode {
      return h(LoadBar);
    },
  });

  document.body.appendChild(Instance.$mount().$el);

  return Instance.$children[0];
};

const init = () => {
  loadlineInstance = loadlineInstance || newInstance();
};

const loadbar: DefaultEntity = {
  start(): void {
    init();
    loadlineInstance.start();
  },
  finish(): void {
    init();
    loadlineInstance.finish();
  },
  fail(): void {
    init();
    loadlineInstance.fail();
  },
};

export default loadbar;
</script>

<style lang="scss">
@import './bar.scss';
</style>
