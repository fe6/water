<template>
  <!-- <Breadcrumb>sss</Breadcrumb> -->
  <div>
    <Breadcrumb class="demo1111">
    <BreadcrumbItem
      separator=">"
      :to="{ name: 'Badge' }"
    >内部跳转到按钮</BreadcrumbItem>
    <BreadcrumbItem separator="<b class='breadcrumb-item'>|</b>">自定义间隔符号</BreadcrumbItem>
    <BreadcrumbItem open="https://qq.com">外跳qq</BreadcrumbItem>
    <BreadcrumbItem href="https://baidu.com">外跳baidu</BreadcrumbItem>
    <BreadcrumbItem>now</BreadcrumbItem>
  </Breadcrumb>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem.vue';

@Component({
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
})
export default class BreadcrumbView extends Vue {
}
</script>

<style lang="scss">
@import '../assets/style/breadcrumb.scss';
</style>
