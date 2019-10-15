<template>
  <section class="demo-box" ref="box">
    <section class="demo-meta" ref="meta">
      <a class="demo-title">{{title}}</a>
      <p class="demo-desc" v-html="desc"></p>
      <div class="demo-actions-panel">
        <WAffix
          :disabled="!expendStatus || isUsed"
          :offsetTop="0"
          @change="affixChange"
        >
          <div class="demo-actions" :class="expendStatus ? 'demo-actions-on' : ''">
              <WLink
                class="demo-actions-btn"
                @click.native="handleExpendStatus"
              >{{expendStatus ? '收起' : '展开'}}代码</WLink>
            <WLink
              class="demo-actions-run"
              v-if="expendStatus && !jsCode"
              @click.native="updateIframe"
            >运行</WLink>
          </div>
        </WAffix>
      </div>
    </section>
    <section
      class="demo-core"
      :style="{height: expendStatus ? 'auto' : '0'}"
    >
      <nav class="demo-nav" v-if="jsCode">
        <a
          class="demo-nav-btn"
          :class="codeStatus === 'html' ? 'demo-nav-btn-on' : ''"
          href="javascript:;"
          @click="changeCodeStatus('html')"
        >Html</a>
        <a
          class="demo-nav-btn"
          :class="codeStatus === 'js' ? 'demo-nav-btn-on' : ''"
          href="javascript:;"
          @click="changeCodeStatus('js')"
        >JavaScript</a>
        <a class="demo-nav-run" href="javascript:;" @click="updateIframe">运行</a>
      </nav>
      <WCode
        @mounted="jsMounted"
        v-model="jsCode"
        v-if="jsCode"
        lang="js"
        :style="codeStatus === 'js' ? '' : 'height: 0;overflow: hidden;'"
        class="demo-core-inner"
      ></WCode>
      <WCode
        @mounted="temMounted"
        v-model="temCode"
        :style="codeStatus === 'html' ? '' : 'height: 0;overflow: hidden;'"
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
import WCode from '@/views/components/OnlineCode.vue';
import WLink from '@/components/link/Link.vue';
import WAffix from '@/components/affix/Affix.vue';
import WRender from '@/helper/render';
import temString from './tem';

@Component({
  components: {
    WCode,
    WLink,
    WRender,
    WAffix,
  },
})
export default class Demo extends Vue {
  expendStatus: boolean = false;

  temCodemirror: any = null;

  jsCodemirror: any = null;

  iframe: any = null;

  codeStatus: string = 'html';

  isUsed: boolean = false;

  @Prop(Function) private render!: Function;

  @Prop(Function) private before!: Function;

  @Prop(String) private temCode!: string;

  @Prop(String) private jsCode!: string;

  @Prop(String) private title!: string;

  @Prop(String) private desc!: string;

  @Prop(String) private iframeHeight!: string;

  @Prop(Object) private data!: object;

  mounted() {
    this.iframe = this.$refs.iframe;
    this.updateIframe();
  }

  @Emit('changeHandle')
  changeHandle(params: any) {
    return params;
  }

  temMounted(cm: any) {
    this.temCodemirror = cm;
  }

  jsMounted(cm: any) {
    this.jsCodemirror = cm;
  }

  updateIframe() {
    const tem = this.temCodemirror.getValue();
    const js = this.jsCode ? this.jsCodemirror.getValue() : '';

    this.renderIframe();

    if (this.iframe) {
      const preview = this.iframe.contentDocument || this.iframe.contentWindow.document;
      preview.open();
      preview.write(temString(tem, js));
      preview.close();
    }
  }

  renderIframe() {
    const boxEle = this.$refs.box as any;
    const oldIframe = boxEle.firstChild;

    if (oldIframe.nodeName === 'IFRAME') {
      boxEle.removeChild(oldIframe);
    }

    const iframeEle = document.createElement('iframe');
    boxEle.insertBefore(iframeEle, boxEle.firstChild);

    iframeEle.style.height = this.iframeHeight || '';

    this.iframe = iframeEle;
  }

  changeCodeStatus(type: string) {
    this.codeStatus = type;
    this.testAffixUsed();
  }

  handleExpendStatus() {
    this.expendStatus = !this.expendStatus;
    this.testAffixUsed();
  }

  testAffixUsed() {
    this.$nextTick(() => {
      const boxRect = (this.$refs.box as any).getBoundingClientRect();
      this.isUsed = boxRect.y + boxRect.height - window.innerHeight < 0;
    });
  }

  affixChange() {
    const boxRect = (this.$refs.box as any).getBoundingClientRect();
    this.isUsed = boxRect.y < 40 - boxRect.height;
  }
}
</script>

<style lang="scss" scope>
  @import "../../assets/style/components/demo.scss";
</style>
