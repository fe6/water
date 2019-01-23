# Select 选择器

## 三种大小
<br>
<br>
<div>
  <button class="inp-btn" :class="{on: sizeIndex === 0}" @click="sizeIndex = 0">小</button>
  <button class="inp-btn" :class="{on: sizeIndex === 1}" @click="sizeIndex = 1">中</button>
  <button class="inp-btn" :class="{on: sizeIndex === 2}" @click="sizeIndex = 2">大</button>
</div>
<br>
<div>
<w-select style="width: 320px;" :size="size[sizeIndex]" mode="tag" v-model="tag">
  <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
</w-select>
<br>
<w-select style="width: 320px;" :size="size[sizeIndex]" mode="multiple" v-model="more1">
  <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
</w-select>
<br>
<w-select style="width: 120px;" :size="size[sizeIndex]" v-model="one">
  <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
</w-select>
</div>
<br>

## 禁用

<br>
<br>
<div>
  <w-select style="width: 320px;" disabled mode="tag" v-model="tag">
    <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
  </w-select>
  <br>
  <w-select style="width: 320px;" disabled mode="multiple" v-model="more1">
    <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
  </w-select>
  <br>
  <w-select style="width: 120px;" disabled v-model="one">
    <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
  </w-select>
</div>
<br>

## 标签

<br>
<br>
<div>
<w-select style="width: 100%;" mode="tag" v-model="tag">
  <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
</w-select>
</div>
<br>

## 多选

<br>
<br>
<div>
<w-select style="width: 100%;" mode="multiple" v-model="more1">
  <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
</w-select>
</div>
<br>

## 扩展菜单

<br>
<br>
<div>
<w-select style="width: 120px;" v-model="expand">
  <w-option v-for="expandData in expandSels" :key="expandData.id" :value="expandData.name" :disabled="expandData.disabled || false">{{expandData.name}}</w-option>
  <div slot="diy" style="cursor: pointer; padding: 5px 12px; line-height: 22px; border-top: 1px solid #ccc; color: #1996f9; font-size: 12px;" @click.stop="expandNew">添加元素</div>
</w-select>
</div>
<br>

## 基本

<br>
<br>
<div>
<w-select style="width: 120px;" v-model="one">
  <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
</w-select>
</div>
<br>

## 搜索

<br>
<br>
<div>
  标签模式：
  <br>
  <w-select style="width: 320px;" search :size="size[sizeIndex]" mode="tag" v-model="tag">
    <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
  </w-select>
  </div>
  <br>
  多选模式：
  <br>
  <w-select style="width: 320px;" search :size="size[sizeIndex]" mode="multiple" v-model="more1">
    <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
  </w-select>
  <br>
  单选模式：
  <br>
  <div style="font-size: 0;">
  <w-select style="width: 120px;" search v-model="search">
    <w-option v-for="oneData in searchSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
  </w-select>
</div>
<br>

## 加载中

<br>
<br>
<div>
  <w-select style="width: 120px;" :before="before" v-model="loadModel" :loading="loading">
    <w-option v-for="oneData in oneSels" :key="oneData.id" :value="oneData.name" :disabled="oneData.disabled || false">{{oneData.name}}</w-option>
  </w-select>
</div>

<br>
tag 多选，搜索，回车添加
multiple 多选，搜索，回车选中
<br>

## option

<br>

<p>
  <div class="w-option" style="display: block;position: static;">
    <ul class="w-option-list">
      <w-option>单选</w-option>
      <w-option mode="multiple">多选</w-option>
      <w-option mode="cascader">多级</w-option>
      <w-option v-model="status">单选</w-option>
      <w-option mode="multiple" v-model="status">多选</w-option>
      <w-option mode="cascader" v-model="status">多级</w-option>
      <w-option :loading="true">单选</w-option>
      <w-option mode="multiple" :loading="true">多选</w-option>
      <w-option mode="cascader" :loading="true">多级</w-option>
      <w-option :loading="true" v-model="status">单选</w-option>
      <w-option mode="multiple" :loading="true" v-model="status">多选</w-option>
      <w-option mode="cascader" :loading="true" v-model="status">多级</w-option>
    </ul>
  </div>
</p>

## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|search|搜索的开关|Boolean|否|无|
|emptyText|搜索未匹配到的文案|String|否|未匹配到结果|
|mode|选择器的模式，支持 单选模式(single)、多选模式(multiple)，标签模式(tag)|String|否|single|
|loading|加载模式|Boolean|否|无|
|disabled|禁用模式|Boolean|否|无|
|size|尺寸大小。可选值： `small`, `large`, `normal` |String|否|normal|
|placement|下拉框位置，可参照[文字提示](./tooltip.md)|String|否|top|
|interval|下拉框间距，单位 px|Number|否|8|
|transfer|是否转移到 body 下|Boolean|否|true|
|getContainer|浮层渲染父节点，默认渲染到 body 上|Function(triggerNode)|否|() => document.body|
|before|改变之前触发，返回 Promise 对象|Function|否|function() {return new Promise((resolve, reject) => {resolve();});}|
|change|改变触发，返回 当前值 ， 当前值的数据对象 ， Event 对象 ， 所有数据|Function|否|() => {}|
|focus|获取焦点触发，返回 Event 对象|Function|否|() => {}|
|blur|失去焦点触发，返回 Event 对象|Function|否|() => {}|
|click|点击选择框触发，返回 Event 对象|Function|否|() => {}|


#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变触发|当前值 ， 当前值的数据对象 ， Event 对象 ， 所有数据|
|focus|获取焦点触发|Event 对象|
|blur|获取焦点触发|Event 对象|
|click|点击选择框触发|Event 对象|


<script>
import WSelect from '../water/select/Select';
import WOption from '../water/select/Option';

export default {
  data() {
    return {
      sizeIndex: 1,
      size: ['small', '', 'large',],
      status: 'true',
      loading: false,
      one: '红星',
      expand: '红星',
      loadModel: '牛栏山',
      search: 'green',
      searchSels: [
        {
          name: 'red',
          id: 1,
        },
        {
          name: 'yellow',
          disabled: true,
          id: 2,
        },
        {
          name: 'green',
          id: 3,
        },
        {
          name: 'write',
          disabled: true,
          id: 4,
        },
      ],
      oneSels: [
        {
          name: '红星',
          disabled: true,
          id: '红星 01',
        },
        {
          name: '牛栏山',
          id: 2,
        },
        {
          name: '金六福',
          disabled: true,
          id: 3,
        },
        {
          name: '江小白',
          id: 4,
        },
      ],
      expandSels: [
        {
          name: 'red',
          id: 1,
        },
      ],
      more1: ['红星', '江小白'],
      tag: ['红星', '江小白'],
    };
  },
  methods: {
    before() {
      this.loading = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.loading = false;
          resolve();
        }, 1000);
      });
    },
    expandNew() {
      const id = this.expandSels.length;
      this.expandSels.push({
        name: `new${id}`,
        id,
      });
    },
  },
  components: {
    WSelect,
    WOption
  },
};
</script>

<style lang="scss" scope>
@import '../water/select/style/select.scss';
@import '../water/select/style/option.scss';

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
