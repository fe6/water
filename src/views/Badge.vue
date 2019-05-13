<template>
  <div>
    <Badge class="badge" :value="5">
      <a href="#" class="badge-link" />
    </Badge>
    <Badge class="badge" showZero>
      <a href="#" class="badge-link" />
    </Badge>
    <Badge class="badge">
      <a href="#" class="badge-link" />
      <Icon slot="count" />
    </Badge>
    <h2>独立使用</h2>
    <Badge :value="10" />
    <Badge
      :value="36"
      style="
        line-height: 18px;
        background: #fff;
        border: 1px solid #dcdcdc;
        color: #999;
        box-shadow: '0 0 0 1px #d9d9d9 inset'
      "
    />
    <Badge :value="69" style="background: #52c41a" />
    <h2>封顶数字</h2>
    <Badge class="badge" :value="99">
      <a href="#" class="badge-link" />
    </Badge>
    <Badge class="badge" :value="100">
      <a href="#" class="badge-link" />
    </Badge>
    <Badge class="badge" :value="99" :overflowCount="10">
      <a href="#" class="badge-link" />
    </Badge>
    <Badge class="badge" :value="100000" :overflowCount="999">
      <a href="#" class="badge-link" />
    </Badge>
    <h2>可点击</h2>
    <a href="#">
      <Badge class="badge" :value="5">
        <span href="#" class="badge-link">123</span>
      </Badge>
    </a>
    <h2>小红点</h2>
    <Badge class="badge" dot>
      <Icon />
    </Badge>
    <Badge class="badge" :value="1" dot>
      <Icon />
    </Badge>
    <Badge class="badge" :value="1" dot>
      <a href="#">Link something</a>
    </Badge>
    <h2>自定义标题-设置鼠标放在状态点上时显示的文字</h2>
    <Badge class="badge" v-model="base" title="这是自定义标题">
      <a href="#" class="badge-link" />
    </Badge>
    <br>
    <br>
    <button @click="base--">-</button>
    <button @click="base++">+</button>
    <h2>状态点</h2>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br>
    <br>
    <Badge status="success" text="成功" />
    <br>
    <Badge status="error" text="报错" />
    <br>
    <Badge status="default" text="默认" />
    <br>
    <Badge status="processing" text="进行中" />
    <br>
    <Badge status="warning" text="提醒" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/icon/Icon.vue';
import Badge from '@/components/badge/Badge.vue';

@Component({
  components: {
    Icon,
    Badge,
  },
})
export default class BadgeView extends Vue {
  base: number = 10;
}
</script>

<style lang="scss">
@import '../assets/style/badge.scss';
</style>
