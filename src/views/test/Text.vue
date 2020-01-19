<!-- @format -->

<template>
  <div>
    <router-link :to="{ name: 'Dev' }">返回</router-link>
    <br />
    <br />
    <div>普通</div>
    <w-text class-name="test-demo">Water 水滴</w-text>
    <div>禁用 disabled</div>
    <w-text disabled>Water 水滴</w-text>
    <div>加粗 strong</div>
    <WText strong>Water 水滴</WText>
    <div>下划线 underline</div>
    <WText underline>Water 水滴</WText>
    <div>标记 mark</div>
    <WText mark>Water 水滴</WText>
    <div>删除 delete</div>
    <WText delete>Water 水滴</WText>
    <div>源代码 code</div>
    <WText code>Water 水滴</WText>
    <div>类型 type</div>
    <WText type="success">Water 水滴 - success</WText>
    <br />
    <WText type="warning" class="test-demo">Water 水滴 - warning</WText>
    <br />
    <WText type="danger">Water 水滴 - danger</WText>
    <br />
    <WText type="info">Water 水滴 - info</WText>
    <br />
    <WText type="secondary">Water 水滴 - secondary</WText>
    <br />
    <WText mark :mark-style="{ backgroundColor: '#f00' }"
      >Water 水滴 - secondary</WText
    >
    <br />
    <br />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TextTestView extends Vue {}
</script>
