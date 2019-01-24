# Popover 气泡卡片
> 点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 基本
>最简单的用法。

<br>
<p>
  <w-popover>
    <a href="javascript:;">Hover me</a>
    <a href="javascript:;" slot="title">这是标题</a>
    <ul slot="content" class="demo-ul">
      <li>气泡卡片1</li>
      <li>气泡卡片2</li>
    </ul>
  </w-popover>
</p>

## 可控制的气泡卡片

<br>
<p>
  示例：
  <w-popover v-model="oneStatus" trigger="click">
    <a href="javascript:;">Click me</a>
    <a href="javascript:;" slot="title">这是标题</a>
    <div slot="content">
      <ul class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
      <a href="javascript:;" @click="oneStatus = false">关闭</a>
    </div>
  </w-popover>
</p>

<p>
  <w-switch v-model="oneStatus" :stop="true">
    <span slot="open">不显示</span>
    <span slot="close">显示</span>
  </w-switch>
</p>

## 12方向

<div class="demo">
  <div class="demo-top">
    <w-popover coreName="demo-core" placement="topLeft">
      <w-button prefix="demo">topLeft</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core">
      <w-button prefix="demo">top</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core" placement="topRight">
      <w-button prefix="demo">topRight</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
  </div>
  <div class="demo-left">
    <w-popover coreName="demo-core" placement="leftTop">
      <w-button prefix="demo">leftTop</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core" placement="left">
      <w-button prefix="demo">left</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core" placement="leftBottom">
      <w-button prefix="demo">leftBottom</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
  </div>
  <div class="demo-right">
    <w-popover coreName="demo-core" placement="rightTop">
      <w-button prefix="demo">rightTop</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core" placement="right">
      <w-button prefix="demo">right</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core" placement="rightBottom">
      <w-button prefix="demo">rightBottom</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
  </div>
  <div class="demo-bottom">
    <w-popover coreName="demo-core" placement="bottomLeft">
      <w-button prefix="demo">bottomLeft</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core" placement="bottom">
      <w-button prefix="demo">Bottom</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-core" placement="bottomRight">
      <w-button prefix="demo">bottomRight</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
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
|placement|气泡框位置|String|否|top|
|coreName|气泡框包裹元素的 class 名|String\|Array\|Object|否|() => {}|
|change|显示隐藏触发的方法，返回当前状态|Function|否|()=>{}|
|mountEnd|初始化完成之后触发，返回当前状态，和当前元素|Function|否|()=>{}|

<script>
import WIcon from '../water/icon/Icon';
import WSwitch from '../water/switch/Switch';
import WButton from '../water/button/Button';
import WPopover from '../water/popover/core';

export default {
  data() {
    return {
      sizeStatus: 0,
      oneStatus: false,
      groupConfig: ['small', '', 'large',],}
    },
  components: {
    WPopover,
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
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/button/style/button.scss';
@import '../water/switch/style/switch.scss';
@import '../water/popover/style/popover.scss';

.demo {
  overflow: auto;
  margin: 16px 0;

  &-core {
    margin: 0 8px 8px 0;
  }

  &-button {
    width: 110px;
  }

  &-top {
    margin-left: 110px;
    white-space: nowrap;
  }

  &-left {
    width: 70px;
    float: left;
  }

  &-right {
    width: 110px;
    margin-left: 465px;
  }

  &-bottom {
    margin-left: 110px;
    clear: both;
    white-space: nowrap;
  }
}

.inp-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:focus {
    outline: none;
  }

  &.on {
    background: #1996f9;
    color: #fff;
  }
}

.demo-ul {
  margin: 0;
  padding: 0;

  & li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
