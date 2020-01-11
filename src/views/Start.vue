<!-- @format -->

<template>
  <div>
    <h1>{{ Start }}</h1>
    <p>本节将介绍如何在项目中使用 Water 。</p>
    <h2>引入 Water</h2>
    <p>
      你可以引入整个 Water
      ，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Water 。
    </p>
    <h4>完整引入</h4>
    <p>在 main.js 中写入以下内容：</p>
    <WCode v-model="allImport" lang="js" class="demo-core-inner"></WCode>
    <p>以上代码便完成了 Water 的引入。需要注意的是，样式文件需要单独引入。</p>
    <h4>按需引入</h4>
    <WCode v-model="needImport" lang="js" class="demo-core-inner"></WCode>
    <h4>开始使用</h4>
    <p>
      至此，一个基于 Vue 和 Element
      的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { TITLE } from '@/views/common/constant';
  import WCode from '@/views/components/OnlineCode.vue';

  @Component({
    components: {
      WCode,
    },
  })
  export default class StartView extends Vue {
    Start: string = TITLE.Start;

    allImport: string = `import Vue from 'vue';
import Water from '@fe6/water';
import '@fe6/water/dist/water.css';
import App from './App.vue';

Vue.use(Water);

new Vue({
  el: '#app',
  render: h => h(App)
});`;

    needImport: string = `import Vue from 'vue';
import { Button, Select } from '@fe6/water';
import App from './App.vue';

Vue.component(Button.waterName, Button);
Vue.component(Select.waterName, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});`;
  }
</script>
