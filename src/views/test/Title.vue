<!-- @format -->

<template>
  <div>
    <router-link :to="{ name: 'Dev' }">返回</router-link>
    <br />
    <br />
    <w-title>Water - 标题1</w-title>
    <w-title :level="2">Water - 标题2</w-title>
    <w-title :level="3">Water - 标题3</w-title>
    <w-title :level="4">Water - 标题4</w-title>
    <w-title :level="5">Water - 标题5</w-title>
    <w-title :level="6">Water - 标题6</w-title>
    <w-title border="left">Water - 标题1 - 左边框</w-title>
    <w-title :level="2" border="left">Water - 标题2 - 左边框</w-title>
    <w-title :level="3" border="left">Water - 标题3 - 左边框</w-title>
    <w-title :level="4" border="left">Water - 标题4 - 左边框</w-title>
    <w-title :level="5" border="left">Water - 标题5 - 左边框</w-title>
    <w-title :level="6" border="left">Water - 标题6 - 左边框</w-title>

    <div>普通</div>
    <w-title class-name="test-demo">Water 水滴</w-title>
    <div>禁用 disabled</div>
    <w-title disabled>Water 水滴</w-title>
    <div>下划线 underline</div>
    <w-title underline>ag Water 水滴</w-title>
    <div>标记 mark</div>
    <w-title mark>Water 水滴</w-title>
    <div>删除 delete</div>
    <w-title delete>Water 水滴</w-title>
    <div>源代码 code</div>
    <w-title code>Water 水滴</w-title>
    <div>类型 type</div>
    <w-title type="success">Water 水滴 - success</w-title>
    <br />
    <w-title :level="2" type="warning" class="test-demo"
      >Water 水滴 - warning</w-title
    >
    <br />
    <w-title :level="3" type="danger">Water 水滴 - danger</w-title>
    <br />
    <w-title :level="4" type="info">Water 水滴 - info</w-title>
    <br />
    <w-title :level="5" type="secondary">Water 水滴 - secondary</w-title>
    <br />
    <w-title mark :mark-style="{ backgroundColor: '#f00' }"
      >Water 水滴 - secondary</w-title
    >
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TitleTestView extends Vue {}
</script>
