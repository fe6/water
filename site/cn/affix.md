# Affix 固钉us
> 将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 基本用法

***output***
<w-affix :offsetTop="10" :index="200">
  <w-button type="danger">w-affix top</w-button>
</w-affix>

***input***

``` vue
<w-affix :offsetTop="10">
  <w-button type="danger">w-affix top</w-button>
</w-affix>
```

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

一些无关紧要的文字。

## 底部悬浮用法

``` vue
<w-affix :offsetBottom="10">
  <w-button type="danger">w-affix bottom</w-button>
</w-affix>
```
<w-affix :offsetBottom="10">
  <w-button type="danger">w-affix bottom</w-button>
</w-affix>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|target|设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数|() => HTMLElement|否|() => window|
|offsetTop|距离窗口顶部达到指定偏移量后触发|number|否|0|
|offsetBottom|距离窗口底部达到指定偏移量后触发|number|否|0|
|index|图钉层级|number|否|10|
|prefix|样式的前缀|String|否|w|
|position|设置定位类型。，可选值请参考 [CSS 标准](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)|String|否|fixed|
|change|固定状态改变时触发的回调函数|Function|否|当前定位类型|

### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|固定状态改变时触发的回调函数|当前定位类型|

<script>
import WAffix from '../../water/Affix';
import WButton from '../../water/button/Button';

export default {
  components: {
    WAffix,
    WButton,
  },
};
</script>
<style lang="scss">
@import '../../water/button/style/button.scss';
</style>
