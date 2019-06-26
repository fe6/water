<template>
  <section class="demo-box">
    <WRender :render="render" :data="data" :changeHandle="changeHandle" :before="before" />
    <section class="demo-meta">
      <a class="demo-title">{{title}}</a>
      <p class="demo-desc" v-html="desc"></p>
      <div class="demo-actions">
        <WLink
          @click.native="expendStatus = !expendStatus"
        >{{expendStatus ? '收起' : '展开'}}代码</WLink>
      </div>
    </section>
    <section
      class="demo-core"
      :style="{height: expendStatus ? 'auto' : '0'}"
    >
      <WCode
        v-model="code"
        class="demo-core-inner"
      ></WCode>
    </section>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import WCode from '@/views/components/Code.vue';
import WLink from '@/components/link/Link.vue';
import WRender from '@/helper/render';

@Component({
  components: {
    WCode,
    WLink,
    WRender,
  },
})
export default class Demo extends Vue {
  expendStatus: boolean = false;

  @Prop(Function) private render!: Function;

  @Prop(Function) private before!: Function;

  @Prop(String) private code!: string;

  @Prop(String) private title!: string;

  @Prop(String) private desc!: string;

  @Prop(Object) private data!: object;

  @Emit('changeHandle')
  changeHandle(params: any) {
    return params;
  }
}
</script>

<style lang="scss" scope>
  @import "../../assets/style/components/demo.scss";
</style>
