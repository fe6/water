# Icon 图标
> Vue.js 的 语义化的矢量图形。

## 如何使用

使用 `<w-icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

## 水滴里面的 icon

|示例|类型|代码|
|---|---|---|
|<w-icon type="forward" />|向前|`<w-icon type="forward" />`|
|<w-icon type="back" />|向后|`<w-icon type="back" />`|
|<w-icon type="loading1" />|加载中1|`<w-icon type="loading1" />`|
|<w-icon type="loading2" />|加载中2|`<w-icon type="loading2" />`|
|<w-icon type="loading3" />|加载中3|`<w-icon type="loading3" />`|
|<w-icon type="loading4" />|加载中4|`<w-icon type="loading4" />`|
|<w-icon type="heart" />|心|`<w-icon type="heart" />`|
|<w-icon type="star" />|星星|`<w-icon type="star" />`|

## 本地部署

图标默认托管在 [iconfont.cn](http://iconfont.cn) ，默认公网可访问。如需本地部署，可参考 [示例](https://github.com/fe6/vue-icon/tree/master/example) 。

## API

由于图标字体本质上还是文字，可以使用 `style` 和 `class` 设置图标的大小和颜色。

<p>
  <w-icon type="loading1" spin />
</p>

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|type|图标类型。如果为空则不显示|String|是|无|
|spin|是否有旋转动画|Boolean|否|无|
|prefix|样式的前缀|String|否|无|

<script>
import WIcon from '../water/icon/Icon';

export default {
  components: {
    WIcon,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
</style>
