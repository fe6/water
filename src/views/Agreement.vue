<template>
  <div>
    <div>
      <router-link :to="{ name: 'TestInput' }">输入框</router-link> |
      <router-link :to="{ name: 'TestProgress' }">进度条</router-link> |
      <router-link :to="{ name: 'TestModal' }">对话框</router-link> |
      <router-link :to="{ name: 'TestPopconfirm' }">气泡确认框</router-link> |
      <router-link :to="{ name: 'TestDatePicker' }">日期选择器</router-link> |
      <router-link :to="{ name: 'TestCascader' }">多级</router-link> |
      <router-link :to="{ name: 'TestScroll' }">滚动</router-link> |
      <router-link :to="{ name: 'TestNeed' }">按需加载</router-link> |
      <router-link :to="{ name: 'TestSelect' }">选择</router-link> |
      <router-link :to="{ name: 'TestCalendar' }">日历</router-link> |
      <router-link :to="{ name: 'TestTable' }">表格</router-link>
    </div>
    <h1>开发约定</h1>
    <p>由于组件库未来也许会有很多人参与，所以在这里我们来约定一些事情。</p>
    <h2>v-model 参数的约定</h2>
    <ul>
      <li>
        <p>下面是通过 <code>value</code> 控制：</p>
        <p>
          <code>Badge</code>、 <code>ButtonGroup</code>、
          <code>Checkbox</code>、 <code>CheckboxGroup</code>、
          <code>Input</code>、 <code>Radio</code>、 <code>RadioGroup</code>、
          <code>Modal</code>、
          <code>Select</code>
        </p>
      </li>
    </ul>
    <h2>参数约定</h2>
    <p>
      参数的命名大部分是参照：
      <a class="link" href="https://ant.design/" target="_blank">ant.design</a>
      。
    </p>
    <ul>
      <li><code>className</code>： 自定义组件最外层的 class 名字。</li>
      <li><code>size</code>： 设置大小。</li>
      <li><code>loading</code>： 设置载入状态。</li>
      <li><code>disabled</code>： 设置失效状态。</li>
      <li>
        <code>options</code>： 指定可选项， 每项具体设置参照
        <code>fieldNames</code> 参数。
      </li>
      <li><code>fieldNames</code>： 自定义属性的字段名。</li>
      <li><code>tag</code>： 实际渲染的标签。</li>
      <li>
        <code>type</code>： 组件类型，不同类型可以是样式不同，可以是使用不同等。
      </li>
      <li><code>href</code>： 站外跳转。</li>
      <li><code>open</code>： 站外跳转，新标签页打开。</li>
      <li><code>to</code>： 站内跳转。</li>
      <li><code>change</code>： 触发的方法。</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class AgreementView extends Vue {}
</script>
