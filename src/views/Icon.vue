<template>
  <div>
    <Icon spin />
    <Icon color="#f00" />
    <icon>
      <img src="https://fe6.github.io/water/logo.png">
    </icon>
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
          <td>spin</td>
          <td>是否有旋转动画</td>
          <td>Boolean</td>
          <td>否</td>
          <td>无</td>
        </tr>
        <tr>
          <td>color</td>
          <td>自定义默认图片的颜色</td>
          <td>String</td>
          <td>否</td>
          <td>#333</td>
        </tr>
        <tr>
          <td>className</td>
          <td>自定义组件最外层的 class 名字</td>
          <td>String 或 Object</td>
          <td>否</td>
          <td>无</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class IconView extends Vue {
}
</script>
