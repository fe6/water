# Number 数字输入框
> 通过鼠标或键盘，输入范围内的数值。

## 基本

<br>
<w-number v-model="num1" decimalSeparator="xxx" :max="5" :min="-2"></w-number>

## 小数

<br>
<w-number v-model="numAnim" :step="0.11"></w-number>

## 三种大小

<p>
  <button class="inp-btn" :class="{on: size === 0}" @click="size = 0">小</button>
  <button class="inp-btn" :class="{on: size === 1}" @click="size = 1">中</button>
  <button class="inp-btn" :class="{on: size === 2}" @click="size = 2">大</button>
</p>
<w-number :size="sizeCfg[size]"></w-number>

## 格式化

<br>
<w-number :formatter="value => `$ ${value}`" :parser="parser" :animate="true" :animateTime="0.2" :precision="1" :step="0.1" decimalSeparator="x" :max="5" :min="-2"></w-number>

## 不可用和只读

<br>
<p>
  <button class="inp-btn" :class="{on: disabled}" @click="disabled = !disabled">{{disabled ? '禁' : '可'}}用</button>
  <button class="inp-btn" :class="{on: readonly}" @click="readonly = !readonly">{{readonly ? '只读' : '可写'}}</button>
</p>
<p>
{{disabled ? '禁' : '可'}}用<w-number v-model="numAnim" :disabled="disabled"></w-number>
{{readonly ? '只读' : '可写'}}<w-number v-model="numAnim" :readonly="readonly"></w-number>
</p>

## 舞动的数字

<br>
<w-number v-model="numAnim" :animate="true" :step="10"></w-number>
<br>
<br>

## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|animate|改变是否动画|Boolean|否|无|
|animateTime|改变动画的时间|Boolean|否|无|
|disabled|禁用|Boolean|否|无|
|readonly|只读|Boolean|否|无|
|size|尺寸大小。可选值： small \| large \| normal |String|否|normal|
|decimalSeparator|小数点转译|String|否|.|
|formatter|指定输入框展示值的格式|Function|否|num => num|
|parser|指定从 formatter 里转换回数字的方式，和 formatter 搭配使用，用于输入的时候|Function|否|input => input|
|min|最小值|Number|否|-Infinity|
|max|最大值|Number|否|Infinity|
|step|每次改变步数，可以为小数|Number|否|1|
|precision|数值精度，原则 step 的小数位和 precision 取最多位数的。|Number|否|无|
|change|改变的时候触发，返回 当前格式化数字，格式化之前的数字|Function|否|() => {}|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|当前格式化数字，格式化之前的数字|


<script>
import WNumber from '../water/number/Number';

export default {
  data() {
    return {
      num1: 1,
      numAnim: 0,
      disabled: true,
      readonly: false,
      size: 1,
      sizeCfg: ['small', '', 'large',],
    };
  },
  methods: {
    parser: (value) => value.replace(/\$\s?|(,*)/g, ''),
  },
  components: {
    WNumber,
  },
};
</script>

<style lang="scss" scope>
@import '../water/number/style/number.scss';

.inp-btn {
  border: none;
  cursor: pointer;
  border: 1px solid #1996f9;
  color: #333;
  transition: color 0.4s, background 0.4s;

  &:focus {
    outline: none;
  }

  &.on {
    background: #1996f9;
    color: #fff;
  }
}
</style>
