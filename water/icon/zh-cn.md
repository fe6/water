# 图标
> Vue.js 的 语义化的矢量图形。

## 如何使用

使用 `<w-icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:
```` html
<p>
  <span><w-icon type="forward" /></span>
  <span><w-icon type="back" /></span>
  <span><w-icon type="loading1" /></span>
  <span><w-icon type="loading2" /></span>
  <span><w-icon type="loading3" /></span>
  <span><w-icon type="loading4" /></span>
  <span><w-icon type="heart" /></span>
  <span><w-icon type="star" /></span>
</p>
````

## 本地部署

图标默认托管在 [iconfont.cn](http://iconfont.cn) ，默认公网可访问。如需本地部署，可参考 [示例](https://github.com/fe6/vue-icon/tree/master/example) 。

## API

由于图标字体本质上还是文字，可以使用 `style` 和 `class` 设置图标的大小和颜色。

```` html
<p>
  <w-icon type="loading1" spin />
</p>
````

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|type|图标类型。如果为空则不显示|String|是|无|
|spin|是否有旋转动画|Boolean|否|无|
|prefix|样式的前缀|String|否|vi|
