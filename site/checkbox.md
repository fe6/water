# Checkbox
> A component that submits multiple pieces of data.

## When to use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## Basic
> Basic usage of checkbox.

***output***

<p>
  <w-checkbox>Checkbox</w-checkbox>
</p>

***input***

``` vue
<template>
  <w-checkbox>Checkbox</w-checkbox>
</template>

<script>
import { WCheckbox } from 'water';

export default {
  components: {
    WCheckbox,
  },
};
</script>
<style lang="scss">
@import 'water/dist/checkbox/checkbox.scss';
</style>
```

## Disabled
> Checkbox is not available.

***output***

<p>
  <w-checkbox :disabled="true">Checkbox</w-checkbox>
  <w-checkbox :disabled="true" :on="true">Checkbox</w-checkbox>
</p>

***input***

``` vue
<template>
  <w-checkbox :disabled="true">Checkbox</w-checkbox>
  <w-checkbox :disabled="true" :on="true">Checkbox</w-checkbox>
</template>

<script>
import { WCheckbox } from 'water';

export default {
  components: {
    WCheckbox,
  },
};
</script>
<style lang="scss">
@import 'water/dist/checkbox/checkbox.scss';
</style>
```

## Controlled checkbox
> Communicated with other components.

***output***

<div>
  <p>
    <w-checkbox v-model="baseStatus" :disabled="disabledStatus">Water</w-checkbox>
  </p>
  <p>
    <w-button type="primary" size="small" @click="changeDis">{{disabledStatus ? 'Disable' : 'Enable'}}</w-button>
    <w-button type="primary" size="small" @click="changeBase">{{baseStatus ? 'Check' : 'Uncheck'}}</w-button>
  </p>
</div>

***input***

``` vue
<template>
  <div>
    <p>
      <w-checkbox v-model="baseStatus" :disabled="disabledStatus">Water</w-checkbox>
    </p>
    <p>
      <w-button type="primary" size="small" @click="changeDis">{{disabledStatus ? 'Disable' : 'Enable'}}</w-button>
      <w-button type="primary" size="small" @click="changeBase">{{baseStatus ? 'Check' : 'Uncheck'}}</w-button>
    </p>
  </div>
</template>

<script>
import { WButton, WCheckbox } from 'water';

export default {
  data() {
    return {
      baseStatus: true,
      disabledStatus: false,
    }
  },
  methods: {
    changeDis() {
      this.disabledStatus = !this.disabledStatus;
    },
    changeBase() {
      this.baseStatus = !this.baseStatus;
    },
  },
  components: {
    WButton,
    WCheckbox,
  },
};
</script>
<style lang="scss">
@import 'water/dist/checkbox/checkbox.scss';
</style>
```

## Checkbox group
> It's convenient to generate a Checkbox group from an array. Set `formatValue` to select the displayed copy.

***output***

<p>
  <w-checkbox-group aria-label="group" :options="groupOpts" v-model="groupList" v-bind:change="changeGroup" format="value" formatValue="value"></w-checkbox-group><input v-show="groupMore" type="text">
  <br>
  <w-checkbox-group aria-label="group" :disabled="true" :options="groupOpts" formatValue="age"></w-checkbox-group>
</p>

***input***

``` vue
<template>
  <p>
    <w-checkbox-group aria-label="group" :options="groupOpts" v-model="groupList" v-bind:change="changeGroup" format="value" formatValue="value"></w-checkbox-group><input v-show="groupMore" type="text">
    <br>
    <w-checkbox-group aria-label="group" :disabled="true" :options="groupOpts" formatValue="age"></w-checkbox-group>
  </p>
</template>

<script>
import { WCheckbox, WCheckboxGroup } from 'water';

export default {
  data() {
    return {
      groupOpts: [
        { value: 'Apple', age: '18 year', on: true, },
        { value: 'Pear', age: '38 year', disabled: true, },
        { value: 'more', age: '68 year', more: true, },
      ],
      groupList: [],
      groupMore: false,
    }
  },
  methods: {
    changeGroup(list, checkStatus, item) {
      this.groupMore = checkStatus && item.more;
    },
  },
  components: {
    WCheckbox,
    WCheckboxGroup,
  },
};
</script>
<style lang="scss">
@import 'water/dist/checkbox/checkbox.scss';
</style>
```

## Flexible layout
> The checkbox can be nested with other tags.

***output***

<div>
  <p>Currently selected: {{gridOnList}}</p>
  <w-row>
    <w-col :span="6" v-for="(gridItem, gridItemIndex) in gridList" :key="gridItemIndex">
      <p style="margin: 10px 0;">
        <w-checkbox :change="changeGrid.bind(this, gridItem, gridItemIndex)" :key="gridItemIndex" v-model="gridItem.value">{{gridItem.name}}</w-checkbox>
      </p>
    </w-col>
  </w-row>
</div>

***input***

``` vue
<template>
  <div>
    <p>Currently selected: {{gridOnList}}</p>
    <w-row>
      <w-col :span="6" v-for="(gridItem, gridItemIndex) in gridList" :key="gridItemIndex">
        <p style="margin: 10px 0;">
          <w-checkbox :change="changeGrid.bind(this, gridItem, gridItemIndex)" :key="gridItemIndex" v-model="gridItem.value">{{gridItem.name}}</w-checkbox>
        </p>
      </w-col>
    </w-row>
  </div>
</template>

<script>
import { WCheckbox, WCheckboxGroup } from 'water';

export default {
  data() {
    return {
      gridList: [
      { name: 'Apple', value: false, },
         { name: 'kiwifruit', value: false, },
         { name: 'orange', value: false, },
         { name: 'Ugly orange', value: false, },
         { name: 'Cherry', value: true, },
         { name: 'Avocado', value: false, },
      ],
      gridOnList: ['Cherry'],
    }
  },
  methods: {
    changeGrid(item, fItemIndex) {
      const index = this.gridOnList.indexOf(item.name);
      if (index > -1) {
        this.gridOnList.splice(index, 1);
      } else {
        this.gridOnList.push(item.name);
      }
    },
  },
  components: {
    WCheckbox,
    WCheckboxGroup,
  },
};
</script>
<style lang="scss">
@import 'water/dist/checkbox/checkbox.scss';
</style>
```

## Select all
> You may use the `indeterminate` attribute when implementing a full selection effect.

***output***

<table>
  <thead>
    <tr>
      <th><w-checkbox :on="flexList.length === flexOnList.length" v-bind:change="checkAllFn" :indeterminate="!!(flexOnList.length && flexList.length > flexOnList.length)"></w-checkbox></th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(fItem, fItemIndex) in flexList" :key="fItemIndex">
      <td><w-checkbox :change="flexibleFn.bind(this, fItem, fItemIndex)" :key="fItemIndex" v-model="fItem.value"></w-checkbox></td>
      <td>{{fItem.name}}</td>
    </tr>
  </tbody>
</table>

***input***

``` vue
<template>
  <table>
    <thead>
      <tr>
        <th><w-checkbox :on="flexList.length === flexOnList.length" v-bind:change="checkAllFn" :indeterminate="flexOnList.length && flexList.length > flexOnList.length"></w-checkbox></th>
        <th>name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(fItem, fItemIndex) in flexList" :key="fItemIndex">
        <td><w-checkbox :change="flexibleFn.bind(this, fItem, fItemIndex)" :key="fItemIndex" v-model="fItem.value"></w-checkbox></td>
        <td>{{fItem.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { WCheckbox, WCol, WRow } from 'water';

export default {
  data() {
    return {
      flexList: [
        { name: 'Lee', value: false, },
        { name: 'Mike', value: true, },
      ],
      flexOnList: [
        { name: 'Mike', value: true, },
      ],
    }
  },
  methods: {
    flexibleFn(item, fItemIndex) {
      const index = this.flexOnList.findIndex(flexItem => flexItem.name === item.name);
      if (index > -1) {
        this.flexOnList.splice(index, 1);
      } else {
        this.flexOnList.push(item);
      }
    },
    checkAllFn(value) {
      this.flexList = !value ? this.flexList.map(item => {
        item.value = false;
        return item;
      }).slice() : this.flexList;
      this.flexOnList = value ? this.flexList.map(item => {
        item.value = true;
        return item;
      }).slice() : [];
    },
  },
  components: {
    WCheckbox,
    WCol,
    WRow,
  },
};
</script>
<style lang="scss">
@import 'water/dist/checkbox/checkbox.scss';
@import 'water/dist/grid/style/col.scss';
@import 'water/dist/grid/style/row.scss';
</style>
```

## Position
> Set `mode` to change the position of the marquee. Support for `left` and `right`. And set `prefix` to append the style prefix.

***output***

<p>
  <w-checkbox mode="right" prefix="demo">Checkbox</w-checkbox>
  <w-checkbox mode="right" prefix="demo">Checkbox</w-checkbox>
  <w-checkbox mode="right" prefix="demo">Checkbox</w-checkbox>
</p>

***input***

``` vue
<template>
  <w-checkbox mode="right" prefix="demo">Checkbox</w-checkbox>
  <w-checkbox mode="right" prefix="demo">Checkbox</w-checkbox>
  <w-checkbox mode="right" prefix="demo">Checkbox</w-checkbox>
</template>

<script>
import { WCheckbox } from 'water';

export default {
  components: {
    WCheckbox,
  },
};
</script>
<style lang="scss">
@import 'water/dist/checkbox/checkbox.scss';

.demo-checkbox {
  display: block;
  height: 20px;
  width: 50%;
  margin: 0;
}
</style>
```

## API

### w-checkbox

#### Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|on|Specify whether it is currently selected|Boolean|No|-|
|disabled|Disable checkbox|Boolean|No|-|
|indeterminate|Set indeterminate state, only responsible for style control|Boolean|No|-|
|change|Triggered when changing. Will return `Event object`, `current state`|Function|No|()=>{}|
|mode|Change the position of the multi-select box. Optional values: `left` or `right`|String|No|-|
|prefix|Append class name prefix|String|No|-|

#### Methods

|Name|Description|Return Value|
|-----|---|-----|
|change|Triggered when changing.|`Event object`, `current state`|

### w-checkbox-group

#### Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|options|Specify options. Each of these data displays the value of value by default. Display the value of formatValue when setting the formatValue property|[\<Object\>]|No|[]|
|formatValue|The key value displayed by the option|String|No|'value'|
|format|Key value setting for the resulting data|String|No|-|
|disabled|Disable checkbox|Boolean|No|-|
|change|Triggered when changing. Will return `data collection`, `current state`, `currently selected data`|Function|No|()=>{}|
|prefix|追加 class 样式名前缀|String|No|-|

#### Methods

|Name|Description|Return Value|
|-----|---|-----|
|change|Triggered when changing.|`data collection`, `current state`, `currently selected data`|

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
        { value: 'Apple', age: '18 year', on: true, },
        { value: 'Pear', age: '38 year', disabled: true, },
        { value: 'more', age: '68 year', more: true, },
      ],
      groupList: [],
      groupMore: false,
      gridList: [
        { name: 'Apple', value: false, },
        { name: 'kiwifruit', value: false, },
        { name: 'orange', value: false, },
        { name: 'Ugly orange', value: false, },
        { name: 'Cherry', value: true, },
        { name: 'Avocado', value: false, },
      ],
      gridOnList: ['Cherry'],
      flexList: [
        { name: 'Lee', value: false, },
        { name: 'Mike', value: true, },
      ],
      flexOnList: [
        { name: 'Mike', value: true, },
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
    checkAllFn(value) {
      this.flexList = !value ? this.flexList.map(item => {
        item.value = false;
        return item;
      }).slice() : this.flexList;
      this.flexOnList = value ? this.flexList.map(item => {
        item.value = true;
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
