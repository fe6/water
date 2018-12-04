# Link 超链

## 基本

<br>

<w-link>这没有链接的超链</w-link>
<br>
<w-link url="http://baidu.com">百度的超链</w-link>
<br>
<w-link url="http://qq.com" target="_blonk">外跳腾讯的超链</w-link>
<br>
<w-link :to="{path: '/'}">去首页</w-link>


## API

### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|to|vue的路由内置跳转|Object|否|无|
|tag|标签名称，配合 to 参数一起使用|String|否|无|
|url|链接到外项目的地址|String|否|无|
|target|跳转类型，配合 url 属性一起使用|String|否|无|


<script>
import WLink from '../water/link/Link';

export default {
  components: {
    WLink,
  },
};
</script>
<style lang="scss">
@import '../water/link/style/link.scss';
</style>
