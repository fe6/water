# Checkbox 多选框
> 提交多条数据的组件。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 Switch 类似。区别在于切换 Switch 会直接触发状态改变，而 Checkbox 一般用于状态标记，需要和提交操作配合。

## 基本用法

<br>

<p>
  <w-checkbox>多选</w-checkbox>
</p>

## 不可用

<br>

<p>
  <w-checkbox :disabled="true">多选</w-checkbox>
  <w-checkbox :disabled="true" :on="true">多选</w-checkbox>
</p>

## 可控的 Checkbox

<br>

<p>
  <w-checkbox v-model="baseStatus" :disabled="disabledStatus">水滴</w-checkbox>
</p>
<p>
  <w-button type="primary" size="small" @click="changeDis">{{disabledStatus ? '不' : ''}}可用</w-button>
  <w-button type="primary" size="small" @click="changeBase">{{baseStatus ? '' : '不'}}选中</w-button>
</p>

## Checkbox 组用法
> 方便的从数组生成 Checkbox 组。设置 `formatValue` 可选择显示的文案.


<p>
  <w-checkbox-group aria-label="group" :options="groupOpts" v-model="groupList" v-bind:change="changeGroup" format="value" formatValue="value"></w-checkbox-group><input v-show="groupMore" type="text">
  <br>
  <w-checkbox-group aria-label="group" :disabled="true" :options="groupOpts" formatValue="age"></w-checkbox-group>
</p>

## 灵活布局
> checkbox 可以结合其他标签进行嵌套开发。

<div>
  <p>当前选中: {{gridOnList}}</p>
  <w-row>
    <w-col :span="6" v-for="(gridItem, gridItemIndex) in gridList" :key="gridItemIndex">
      <p style="margin: 10px 0;">
        <w-checkbox :change="changeGrid.bind(this, gridItem, gridItemIndex)" :key="gridItemIndex" v-model="gridItem.value">{{gridItem.name}}</w-checkbox>
      </p>
    </w-col>
  </w-row>
</div>


## 全选
> 在实现全选效果时，你可能会用到 `indeterminate` 属性。

<br>

<table>
  <thead>
    <tr>
      <th><w-checkbox :on="flexList.length === flexOnList.length" v-bind:change="checkAllFn" :indeterminate="!!(flexOnList.length && flexList.length > flexOnList.length)"></w-checkbox></th>
      <th>昵称</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(fItem, fItemIndex) in flexList" :key="fItemIndex">
      <td><w-checkbox :change="flexibleFn.bind(this, fItem, fItemIndex)" :key="fItemIndex" v-model="fItem.value"></w-checkbox></td>
      <td>{{fItem.name}}</td>
    </tr>
  </tbody>
</table>

## 改变选框的位置
> 设置 `mode` 改变选框的位置。支持 `left` 和 `right` 。并设置 `prefix` 可追加样式前缀

<br>

<p>
  <w-checkbox mode="right" prefix="demo">多选</w-checkbox>
  <w-checkbox mode="right" prefix="demo">多选</w-checkbox>
  <w-checkbox mode="right" prefix="demo">多选</w-checkbox>
</p>

## API

### w-checkbox 组件

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|on|指定当前是否选中|Boolean|否|无|
|disabled|失效状态|Boolean|否|无|
|indeterminate|设置 indeterminate 状态，只负责样式控制|Boolean|否|无|
|change|改变的时候触发。会返回 `Event 对象`, `当前状态`|Function|否|()=>{}|
|mode|改变多选框的位置。可选值： `left` 或者 `right`|String|否|无|
|prefix|追加 class 样式名前缀|String|否|无|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|`Event 对象`, `当前状态`|

### w-checkbox-group 组件

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|options|指定可选项。其中每条数据默认显示 value 的值。当设置 formatValue 属性的时候显示 formatValue 的值|[\<Object\>]|否|[]|
|formatValue|选项显示的 key 值|String|否|'value'|
|format|所得数据的 key 值设置|String|否|无|
|disabled|失效状态|Boolean|否|无|
|change|改变的时候触发。会返回 `数据集合`, `当前状态`, `当前选中数据`|Function|否|()=>{}|
|prefix|追加 class 样式名前缀|String|否|无|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|`数据集合`, `当前状态`, `当前选中数据`|

<script>
import WCheckbox from '../water/checkbox/Checkbox';
import WCheckboxGroup from '../water/checkbox/CheckboxGroup';
import WButton from '../water/button/Button';
import { WCol, WRow } from '../water/grid/index';

export default {
  data() {
    return {
      baseStatus: true,
      disabledStatus: false,
      groupOpts: [
        { value: 'Apple', age: '18岁', on: true, },
        { value: 'Pear', age: '38岁', disabled: true, },
        { value: 'more', age: '68岁', more: true, },
      ],
      groupList: [],
      groupMore: false,
      gridList: [
        { name: '苹果', value: false, },
        { name: '猕猴桃', value: false, },
        { name: '橙子', value: false, },
        { name: '丑橘', value: false, },
        { name: '樱桃', value: true, },
        { name: '牛油果', value: false, },
      ],
      gridOnList: ['樱桃'],
      flexList: [
        { name: '李红星', value: false, },
        { name: '李世民', value: true, },
      ],
      flexOnList: [
        { name: '李世民', value: true, },
      ],
    }
  },
  methods: {
    changeDis() {
      this.disabledStatus = !this.disabledStatus;
    },
    changeBase() {
      this.baseStatus = !this.baseStatus;
    },
    changeGroup(list, checkStatus, item) {
      this.groupMore = checkStatus && item.more;
    },
    changeGrid(item, fItemIndex) {
      const index = this.gridOnList.indexOf(item.name);
      if (index > -1) {
        this.gridOnList.splice(index, 1);
      } else {
        this.gridOnList.push(item.name);
      }
    },
    flexibleFn(item, fItemIndex) {
      const index = this.flexOnList.findIndex(flexItem => flexItem.name === item.name);
      if (index > -1) {
        this.flexOnList.splice(index, 1);
      } else {
        this.flexOnList.push(item);
      }
    },
    checkAllFn(event, value) {
      this.flexList = !value ? this.flexList.map(item => {
        item.value = false;
        return item;
      }).slice() : this.flexList;
      this.flexOnList = value ? this.flexList.map(item => {
        item.value = value;
        return item;
      }).slice() : [];
    },
  },
  components: {
    WButton,
    WCheckbox,
    WCheckboxGroup,
    WCol,
    WRow,
  },
};
</script>
<style lang="scss">
@import '../water/button/style/button.scss';
@import '../water/grid/style/col.scss';
@import '../water/grid/style/row.scss';
@import '../water/checkbox/style/checkbox.scss';
@import '../water/checkbox/style/checkboxgroup.scss';

.demo-checkbox {
  display: block;
  height: 20px;
  width: 50%;
  margin: 0;
}
</style>
