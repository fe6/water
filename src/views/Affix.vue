<template>
  <div class="affix">
    <Affix><div style="color: green;">普通 Affix</div></Affix>
    <div class="affix-box">
      <div class="affix-box-left">
        普通原生 css 实现
      </div>
      <div class="affix-box-right">
        <div style="position:sticky;top: 10px;">Affix</div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="affix-box">
      <div class="affix-box-left">
        使用 Affix 组件实现
      </div>
      <Affix position="sticky" :offsetTop="30"><div class="affix-box-right">Affix</div></Affix>
    </div>
    <Affix :offsetBottom="10"><span style="background: green">Affix</span></Affix>
    <br>
    <br>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>是否必填</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>offsetTop</td>
          <td>距离窗口<strong>顶</strong>部达到指定偏移量后触发</td>
          <td>number</td>
          <td>否</td>
          <td>10</td>
        </tr>
        <tr>
          <td>offsetBottom</td>
          <td>距离窗口<strong>底</strong>部达到指定偏移量后触发</td>
          <td>number</td>
          <td>否</td>
          <td>无</td>
        </tr>
        <tr>
          <td>index</td>
          <td>层级</td>
          <td>number</td>
          <td>否</td>
          <td>无</td>
        </tr>
        <tr>
          <td>status</td>
          <td>状态。为 false 的时候定位方式为 static 。</td>
          <td>Boolean</td>
          <td>否</td>
          <td>true</td>
        </tr>
        <tr>
          <td>change</td>
          <td>固定状态改变时触发的回调函数</td>
          <td>Function(affixed)</td>
          <td>否</td>
          <td>() => {}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <br>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>固定状态改变时触发的回调函数</td>
          <td>当前定位类型</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <br>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Affix from '@/components/affix/Affix.vue';

@Component({
  components: {
    Affix,
  },
})
export default class AffixView extends Vue {
}
</script>

<style lang="scss">
.affix {
  &-box {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    &-left {
      height: 2000px;
      width: 760px;
      margin-right: 20px;
      background: #f00;
      padding: 32px 20px 24px;
      border-radius: 8px;
      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.06);
    }

    &-right {
      position: relative;
      width: 320px;
    }
  }
}
</style>
