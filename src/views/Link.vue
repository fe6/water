<template>
  <div>
    <h2>基本</h2>
    <WLink>这没有链接的超链</WLink>
    <br>
    <WLink
      url="http://baidu.com"
    >百度的超链</WLink>
    <br>
    <WLink
      url="http://qq.com"
      target="\_blonk"
    >外跳腾讯的超链</WLink>
    <br>
    <WLink
      :to="{path: '/'}"
    >去首页</WLink>

    <br>
    <WLink>
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      这没有链接的超链
    </WLink>
    <br>
    <WLink
      url="http://baidu.com"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      百度的超链
    </WLink>
    <br>
    <WLink
      url="http://qq.com"
      target="\_blonk"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      外跳腾讯的超链
    </WLink>
    <br>
    <WLink
      :to="{path: '/'}"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      去首页
    </WLink>

    <h2>加载</h2>
    <WLink loading>这没有链接的超链</WLink>
    <br>
    <WLink
      loading
      url="http://baidu.com"
    >百度的超链</WLink>
    <br>
    <WLink
      loading
      url="http://qq.com"
      target="\_blonk"
    >外跳腾讯的超链</WLink>
    <br>
    <WLink
      loading
      :to="{path: '/'}"
    >去首页</WLink>
    <h2>小版</h2>
    <WLink
      size="small"
    >这没有链接的超链</WLink>
    <br>
    <WLink
      size="small"
      url="http://baidu.com"
    >百度的超链</WLink>
    <br>
    <WLink
      size="small"
      url="http://qq.com"
      target="\_blonk"
    >外跳腾讯的超链</WLink>
    <br>
    <WLink
      size="small"
      :to="{path: '/'}"
    >去首页</WLink>

    <br>
    <WLink
      size="small">
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      这没有链接的超链
    </WLink>
    <br>
    <WLink
      size="small"
      url="http://baidu.com"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      百度的超链
    </WLink>
    <br>
    <WLink
      size="small"
      url="http://qq.com"
      target="\_blonk"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      外跳腾讯的超链
    </WLink>
    <br>
    <WLink
      size="small"
      :to="{path: '/'}"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      去首页
    </WLink>
    <h2>大版</h2>
    <WLink
      size="large"
    >这没有链接的超链</WLink>
    <br>
    <WLink
      size="large"
      url="http://baidu.com"
    >百度的超链</WLink>
    <br>
    <WLink
      size="large"
      url="http://qq.com"
      target="\_blonk"
    >外跳腾讯的超链</WLink>
    <br>
    <WLink
      size="large"
      :to="{path: '/'}"
    >去首页</WLink>

    <br>
    <WLink
      size="large">
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      这没有链接的超链
    </WLink>
    <br>
    <WLink
      size="large"
      url="http://baidu.com"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      百度的超链
    </WLink>
    <br>
    <WLink
      size="large"
      url="http://qq.com"
      target="\_blonk"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      外跳腾讯的超链
    </WLink>
    <br>
    <WLink
      size="large"
      :to="{path: '/'}"
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      去首页
    </WLink>
    <h2>禁用</h2>
    <WLink disabled>这没有链接的超链</WLink>
    <br>
    <WLink
      disabled
    >
      <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      这没有链接的超链
    </WLink>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WLink from '../components/link/Link.vue';
import Icon from '../components/icon/Icon.vue';

@Component({
  components: {
    WLink,
    Icon,
  },
})
export default class LinkView extends Vue {
}
</script>
