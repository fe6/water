# Tooltip 文字提示
> 简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
可用来代替系统默认的 `title` 提示，提供一个按钮/文字/操作的文案解释。

## 基本
>最简单的用法。

<br>
<p>
  <w-tooltip content="文字提示"><a href="javascript:;">鼠标输入时将显示工具提示。</a></w-tooltip>
</p>

## 可控制的文字提示

<br>
<p>
  示例： <w-tooltip content="文字提示" v-model="oneStatus"><a href="javascript:;">移入上去</a></w-tooltip>
</p>

<p>
  <w-switch v-model="oneStatus">
    <span slot="open">不显示</span>
    <span slot="close">显示</span>
  </w-switch>
</p>

## 自定义样式

> 可调整间距，可设置颜色等样式

<br>
<p>
  <w-tooltip :interval="16" content="文字提示" arrowColor="rgba(255, 255, 0, 0.4)" :contentStyle="{['background-color']: 'rgba(255, 255, 0, 0.2)', color: 'rgba(255, 0, 255, 0.2)'}"><a href="javascript:;">鼠标输入时，我改变的显示的位置和颜色。</a></w-tooltip>
</p>

## 12方向

<br>
<br>

<div class="demo">
  <div class="demo-popover-top">
    <w-tooltip coreName="demo-popover-core" placement="topLeft" content="文字提示">
      <w-button prefix="demo-tooltip">topLeft</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" content="文字提示">
      <w-button prefix="demo-tooltip">top</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" placement="topRight" content="文字提示">
      <w-button prefix="demo-tooltip">topRight</w-button>
    </w-tooltip>
  </div>
  <div class="demo-popover-left">
    <w-tooltip coreName="demo-popover-core" placement="leftTop" content="文字提示">
      <w-button prefix="demo-tooltip">leftTop</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" placement="left" content="文字提示">
      <w-button prefix="demo-tooltip">left</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" placement="leftBottom" content="文字提示">
      <w-button prefix="demo-tooltip">leftBottom</w-button>
    </w-tooltip>
  </div>
  <div class="demo-popover-right">
    <w-tooltip coreName="demo-popover-core" placement="rightTop" content="文字提示">
      <w-button prefix="demo-tooltip">rightTop</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" placement="right" content="文字提示">
      <w-button prefix="demo-tooltip">right</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" placement="rightBottom" content="文字提示">
      <w-button prefix="demo-tooltip">rightBottom</w-button>
    </w-tooltip>
  </div>
  <div class="demo-popover-bottom">
    <w-tooltip coreName="demo-popover-core" placement="bottomLeft" content="文字提示">
      <w-button prefix="demo-tooltip">bottomLeft</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" placement="bottom" content="文字提示">
      <w-button prefix="demo-tooltip">Bottom</w-button>
    </w-tooltip>
    <w-tooltip coreName="demo-popover-core" placement="bottomRight" content="文字提示">
      <w-button prefix="demo-tooltip">bottomRight</w-button>
    </w-tooltip>
  </div>
</div>

<br>
<br>
<br>
<br>
<br>

## API

### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|enterDelay|鼠标移入后延时多少才显示 Tooltip，单位：毫秒|Number|否|0|
|leaveDelay|鼠标移出后延时多少才隐藏 Tooltip，单位：秒|Number|否|100|
|trigger|触发行为，可选 hover\|click|String|否|hover|
|getContainer|浮层渲染父节点，默认渲染到 body 上|Function(triggerNode)|否|() => document.body|
|interval|间距修改，单位 px|Number|否|8|
|placement|气泡框位置|String|否|top|
|content|气泡框内容|String|否|无|
|coreName|气泡框包裹元素的 class 名|String\|Array\|Object|否|() => {}|
|change|显示隐藏触发的方法，返回当前状态|Function|否|()=>{}|
|mountEnd|初始化完成之后触发，返回当前状态，和当前元素|Function|否|()=>{}|
|arrowColor|三角的颜色|String|否|rgba(0, 0, 0, 0.75)|
|contentStyle|内容的样式|Object|否|无|

<script>
import WIcon from '../water/icon/Icon';
import WSwitch from '../water/switch/Switch';
import WButton from '../water/button/Button';
import WTooltip from '../water/tooltip/core';

export default {
  data() {
    return {
      sizeStatus: 0,
      oneStatus: false,
      groupConfig: ['small', '', 'large',],}
    },
  components: {
    WTooltip,
    WButton,
    WIcon,
    WSwitch,
  },
  methods: {
    changeOneStatus() {
      this.oneStatus = !this.oneStatus;
    },
  },
};
</script>
<style lang="scss">
@import '../water/icon/style/icon.scss';
@import '../water/button/style/button.scss';
@import '../water/switch/style/switch.scss';
@import '../water/tooltip/style/tooltip.scss';
</style>
