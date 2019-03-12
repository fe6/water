# Badge 徽章
> 图标右上角的圆形徽标数字

##  基本
> 简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。

<br>
<br>

<div>
  <w-badge class="demo-badge" :value="5">
    <a href="#" class="demo-link" />
  </w-badge>
  <w-badge class="demo-badge" showZero>
    <a href="#" class="demo-link" />
  </w-badge>
  <w-badge class="demo-badge">
    <a href="#" class="demo-link" />
    <w-icon slot="count" type="heart" style="color: #f5222d" />
  </w-badge>
</div>
<br>
<br>

##  独立使用
> 不包裹任何元素即是独立使用，可自定样式展现。在右上角的 badge 则限定为红色。

<br>
<br>

<div>
  <w-badge :value="10" />
  <w-badge :value="36" style="line-height: 18px; background: #fff; border: 1px solid #dcdcdc; color: #999; box-shadow: '0 0 0 1px #d9d9d9 inset'" />
  <w-badge :value="69" style="background: #52c41a" />
</div>
<br>
<br>

##  封顶数字
<br>
<br>

<div>
  <w-badge class="demo-badge" :value="99">
    <a href="#" class="demo-link" />
  </w-badge>
  <w-badge class="demo-badge" :value="100">
    <a href="#" class="demo-link" />
  </w-badge>
  <w-badge class="demo-badge" :value="99" :overflowCount="10">
    <a href="#" class="demo-link" />
  </w-badge>
  <w-badge class="demo-badge" :value="100000" :overflowCount="999">
    <a href="#" class="demo-link" />
  </w-badge>
</div>
<br>
<br>

##  可点击
> 用 a 标签进行包裹即可。

<br>
<br>

<div>
  <a href="#">
    <w-badge class="demo-badge" :value="5">
      <a href="#" class="demo-link" />
    </w-badge>
  </a>
</div>
<br>
<br>

##  小红点
> 没有具体的数字。

<br>
<br>

<div>
  <w-badge class="demo-badge" dot>
    <w-icon type="heart" />
  </w-badge>
  <w-badge class="demo-badge" :value="1" dot>
    <w-icon type="heart" />
  </w-badge>
  <w-badge class="demo-badge" :value="1" dot>
    <a href="#">Link something</a>
  </w-badge>
</div>
<br>
<br>

##  自定义标题
> 设置鼠标放在状态点上时显示的文字

<br>
<br>

<div>
  <w-badge class="demo-badge" v-model="base" title="这是自定义标题">
    <a href="#" class="demo-link" />
  </w-badge>
  <br>
  <br>
  <button class="inp-btn" @click="base--">-</button>
  <button class="inp-btn" @click="base++">+</button>
</div>
<br>
<br>

##  状态点
> 用于表示状态的小圆点。

<br>
<br>

<div>
  <w-badge status="success" />
  <w-badge status="error" />
  <w-badge status="default" />
  <w-badge status="processing" />
  <w-badge status="warning" />
  <br>
  <br>
  <w-badge status="success" text="成功" />
  <br>
  <w-badge status="error" text="报错" />
  <br>
  <w-badge status="default" text="默认" />
  <br>
  <w-badge status="processing" text="进行中" />
  <br>
  <w-badge status="warning" text="提醒" />
</div>
<br>
<br>

## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|overflowCount|展示封顶的数字值|Number|否|99|
|dot|不展示数字，只有一个小红点|Boolean|否|无|
|showZero|当数值为 0 时，是否展示 Badge|Boolean|否|无|
|status|设置 Badge 为状态点，可选参数：success, error, default, processing, warning |String|否|无|
|text|在设置了 status 的前提下有效，设置状态点的文本|String|否|无|
|title|设置鼠标放在状态点上时显示的文字|String|否|徽章数|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|`Event 对象`, `当前状态`|


<script>
import WIcon from '../water/icon/Icon';
import WBadge from '../water/badge/Badge';

export default {
  data() {
    return {
      base: 10,
    };
  },
  components: {
    WBadge,
    WIcon,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/badge/style/badge.scss';
</style>
