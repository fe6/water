# Input 输入框
>通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择

## 三种大小
> 我们为 &lt;w-input /&gt; 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。

<div>
  <span>尺寸：</span>
  <button :key="0" @click="changeGroupStatus($event, 0)" class="inp-btn" :class="{'on': sizeStatus === 0}">小</button>
  <button :key="1" @click="changeGroupStatus($event, 1)" class="inp-btn" :class="{'on': sizeStatus === 1}">中</button>
  <button :key="2" @click="changeGroupStatus($event, 2)" class="inp-btn" :class="{'on': sizeStatus === 2}">大</button>
  <button @click="disabled = !disabled" class="inp-btn" :class="{'on': disabled}">禁用</button>
</div>
<p>
  <w-input :size="groupConfig[sizeStatus]" placeholder="尺寸" :disabled="disabled" />
</p>


## 前缀和后缀
> 在输入框上添加前缀或后缀图标

<p>
<w-input placeholder="前缀和后缀" >
  <w-icon slot="prefix" type="heart" />
  <w-icon slot="suffix" type="star" />
</w-input>
</p>

## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|placeholder|默认文案|String|否|无|
|size|尺寸设置。可选 large || small|String|否|无|
|disabled|是否禁用状态|Boolean|否|无|
|change|改变的时候触发。会返回 `Event 对象`, `当前状态`|Function|否|()=>{}|
|type|声明 input 类型，同原生 input 标签的 type 属性，见：MDN。|String|否|text|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|`Event 对象`, `当前状态`|


<script>
import WIcon from '../water/icon/Icon';
import WInput from '../water/form/input/InputWraper';

export default {
  data() {
    return {
      disabled: false,
      sizeStatus: 1,
      groupConfig: ['small', '', 'large',],
    };
  },
  methods: {
    changeGroupStatus($event, index) {
      this.sizeStatus = index;
    },
  },
  components: {
    WInput,
    WIcon,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/form/input/input.scss';

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
