# Link 超链

## 基本

<br>
<div>
  <span>尺寸：</span>
  <button :key="0" @click="changeGroupStatus($event, 0)" class="inp-btn" :class="{'on': sizeStatus === 0}">小</button>
  <button :key="1" @click="changeGroupStatus($event, 1)" class="inp-btn" :class="{'on': sizeStatus === 1}">中</button>
  <button :key="2" @click="changeGroupStatus($event, 2)" class="inp-btn" :class="{'on': sizeStatus === 2}">大</button>
  <button @click="loading = !loading" class="inp-btn" :class="{'on': loading}">加载中</button>
</div>
<br>

<w-link :loading="loading" :size="groupConfig[sizeStatus]">这没有链接的超链</w-link>
<br>
<w-link url="http://baidu.com" :loading="loading" :size="groupConfig[sizeStatus]">百度的超链</w-link>
<br>
<w-link url="http://qq.com" :loading="loading" target="_blonk" :size="groupConfig[sizeStatus]">外跳腾讯的超链</w-link>
<br>
<w-link :to="{path: '/'}" :loading="loading" :size="groupConfig[sizeStatus]">去首页</w-link>


## API

### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|to|vue的路由内置跳转|Object|否|无|
|tag|标签名称，配合 to 参数一起使用|String|否|无|
|url|链接到外项目的地址|String|否|无|
|target|跳转类型，配合 url 属性一起使用|String|否|无|
|size|尺寸设置。可选 large || small|String|否|无|
|loading|处于加载中状态，点击事件失效，样式也会变|Boolean|否|无|

<script>
import WLink from '../water/link/Link';

export default {
  data() {
    return {
      sizeStatus: 0,
      loading: false,
      groupConfig: ['small', '', 'large',],}
    },
  components: {
    WLink,
  },
  methods: {
    changeGroupStatus($event, index) {
      this.sizeStatus = index;
    },
  },
};
</script>
<style lang="scss">
@import '../water/link/style/link.scss';

.inp-btn {
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.on {
    background: #1996f9;
    color: #fff;
  }
}
</style>
