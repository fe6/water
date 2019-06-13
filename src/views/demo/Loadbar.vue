<template>
  <div>
    <h1>LoadingBar 加载进度条</h1>
    <h2>概述</h2>
    <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>
    <h2>说明</h2>
    <p>
      LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。
      主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，
      LoadingBar 会模拟进度，当然也可以通过 <code>finish()</code>
      方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。
    </p>
    <h3>在路由中使用</h3>
    <WCode :code="router" border lang="js" />
    <h3>在异步请求中使用</h3>
    <WCode :code="ajax" border lang="js" />
    <h2>代码示例</h2>
    <WDemo
      :code="base.code"
      :render="base.render"
      :title="base.title"
      :desc="base.desc"
    ></WDemo>
    <h2>API</h2>
    <p>通过直接调用以下方法来使用组件：</p>
    <ul>
      <li>
        <code>this.$Loading.start()</code>
      </li>
      <li>
        <code>this.$Loading.finish()</code>
      </li>
      <li>
        <code>this.$Loading.fail()</code>
      </li>
    </ul>
    <p>以上方法隐式的创建及维护Vue组件。函数及参数说明如下：</p>
    <MethodTable :data="methods"></MethodTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MethodTable from '@/views/components/MethodTable.vue';
import WCode from '@/views/components/Code.vue';
import WDemo from '@/views/components/Demo.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/loadbar/base';
import router from '@/views/code/loadbar/router';
import ajax from '@/views/code/loadbar/ajax';
import { methods } from '@/views/api/loadbar';
import { MethodsEntity } from '@/views/entity/apientity';

@Component({
  components: {
    MethodTable,
    WCode,
    WDemo,
  },
})
export default class LoadbarView extends Vue {
  base: ApiEntity = base;

  router: string = router;

  methods: MethodsEntity[] = methods;

  ajax:string = ajax;
}
</script>
