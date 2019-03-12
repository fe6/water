# Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。


## 基本
>最简单的用法。

<br>
<p>
  <w-popconfirm>
    <a href="javascript:;">Click me</a>
    <div slot="content">
      <p style="margin: 0;">这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
    </div>
  </w-popconfirm>
</p>

## 可控制的确认框

<br>
<p>
  示例：
  <w-popconfirm v-model="oneStatus" okText="知道了" cancelText="关闭">
    <a href="javascript:;">Click me</a>
    <div slot="content">
      <p style="margin: 0;">这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
    </div>
  </w-popconfirm>
</p>

<p>
  <w-switch v-model="oneStatus" :stop="true">
    <span slot="open">不显示</span>
    <span slot="close">显示</span>
  </w-switch>
</p>

## 确定之前

<br>
<p>
  <w-popconfirm :loading="isLoading" :before="before">
    <a href="javascript:;">Click me</a>
    <div slot="content">
      <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
    </div>
  </w-popconfirm>
</p>

## 12方向

<div class="popconfirm">
  <div class="demo-popover-top">
    <w-popconfirm coreName="demo-popover-core" placement="topLeft">
      <w-button prefix="popconfirm">topLeft</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core">
      <w-button prefix="popconfirm">top</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core" placement="topRight">
      <w-button prefix="popconfirm">topRight</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
  </div>
  <div class="demo-popover-left">
    <w-popconfirm coreName="demo-popover-core" placement="leftTop">
      <w-button prefix="popconfirm">leftTop</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core" placement="left">
      <w-button prefix="popconfirm">left</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core" placement="leftBottom">
      <w-button prefix="popconfirm">leftBottom</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
  </div>
  <div class="demo-popover-right">
    <w-popconfirm coreName="demo-popover-core" placement="rightTop">
      <w-button prefix="popconfirm">rightTop</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core" placement="right">
      <w-button prefix="popconfirm">right</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core" placement="rightBottom">
      <w-button prefix="popconfirm">rightBottom</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
  </div>
  <div class="demo-popover-bottom">
    <w-popconfirm coreName="demo-popover-core" placement="bottomLeft">
      <w-button prefix="popconfirm">bottomLeft</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core" placement="bottom">
      <w-button prefix="popconfirm">Bottom</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
    <w-popconfirm coreName="demo-popover-core" placement="bottomRight">
      <w-button prefix="popconfirm">bottomRight</w-button>
      <div slot="content">
        <p style="margin: 0;"><w-icon type="heart" /> 这是确认框，更多弹框尽在<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>
      </div>
    </w-popconfirm>
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
|loading|确定按钮的加载状态|Boolean|否|无|
|getContainer|浮层渲染父节点，默认渲染到 body 上|Function(triggerNode)|否|() => document.body|
|placement|气泡框位置|String|否|top|
|coreName|气泡框包裹元素的 class 名|String\|Array\|Object|否|() => {}|
|change|显示隐藏触发的方法，返回当前状态|Function|否|()=>{}|
|cancel|确定之后触发，返回当前状态，和当前元素|Function|否|()=>{}|
|ok|确定之后触发，返回当前状态，和当前元素|Function|否|()=>{}|
|mountEnd|初始化完成之后触发，返回当前状态，和当前元素|Function|否|()=>{}|
|before|确定之前触发，返回 Promise 对象|Function|否|无|
|cancelText|取消文案设置|String|否|取消|
|cokText|确定文案设置|String|否|确定|

### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|显示隐藏触发的方法|当前状态|
|ok|确定之后触发事件|当前状态|
|cancel|取消之后触发事件|当前状态|
|mountEnd|初始化之后触发事件|当前状态|

<script>
import WIcon from '../water/icon/Icon';
import WSwitch from '../water/switch/Switch';
import WButton from '../water/button/Button';
import WPopconfirm from '../water/popconfirm/core';

export default {
  data() {
    return {
      sizeStatus: 0,
      oneStatus: false,
      isLoading: false,
      groupConfig: ['small', '', 'large',],}
    },
  components: {
    WPopconfirm,
    WButton,
    WIcon,
    WSwitch,
  },
  methods: {
    changeOneStatus() {
      this.oneStatus = !this.oneStatus;
    },
    before: async function() {
      this.isLoading = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isLoading = false;
          resolve()
        }, 2000);
      } )
    },
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/button/style/button.scss';
@import '../water/switch/style/switch.scss';
@import '../water/popconfirm/style/popconfirm.scss';
</style>
