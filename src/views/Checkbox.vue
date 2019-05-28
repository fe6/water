<template>
  <div>
    <!-- <h2>基本用法</h2>
    <p>
      <Checkbox>通用多选</Checkbox>
      <Checkbox checkColor="#f00" hoverColor="#0f0">定制颜色</Checkbox>
    </p>
    <h2>不可用</h2>
    <p>
      <Checkbox disabled>多选</Checkbox>
      <Checkbox disabled :value="true">多选</Checkbox>
    </p>
    <h2>可控的 Checkbox</h2>
    <p>
      <Checkbox v-model="baseStatus" :disabled="disabledStatus">水滴</Checkbox>
    </p>
    <p>
      {{baseStatus}}-
      <Button @click="changeDis">{{disabledStatus ? '禁' : '可'}}用</Button>
      <Button @click="changeBase">{{baseStatus ? '选中' : '未选'}}</Button>
    </p> -->
    <!-- <h2>label用法</h2>
    <p>
      {{labelStatus}}-
      <Checkbox label="100015" v-model="labelStatus">重庆不插电</Checkbox>
    </p> -->
    <h2>Checkbox 组用法</h2>
    <p>
      {{groupList}}
      <CheckboxGroup
        aria-label="group"
        :options="groupOpts"
        v-model="groupList"
        v-bind:change="changeGroup"
      ></CheckboxGroup><input v-show="groupMore" aria-label="more" type="text">
      <br>
      <!-- <CheckboxGroup
        aria-label="group"
        :options="groupOpts"
        :fieldNames="{ value: 'age' }"
      ></CheckboxGroup>
      <br>
      <CheckboxGroup
        aria-label="group"
        :disabled="true"
        :options="groupOpts"
        :fieldNames="{ value: 'age' }"
      ></CheckboxGroup> -->
    </p>
    <!-- <h2>全选</h2>
    <table>
      <thead>
        <tr>
          <th>
            <Checkbox
              :value="flexList.length === flexOnList.length"
              :change="checkAllFn"
              :indeterminate="!!(flexOnList.length && flexList.length > flexOnList.length)"
            ></Checkbox>
          </th>
          <th>昵称</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fItem, fItemIndex) in flexList" :key="fItemIndex">
          <td>
            <Checkbox
              :change="flexibleFn.bind(this, fItem)"
              :key="fItemIndex"
              v-model="fItem.value"
            ></Checkbox>
          </td>
          <td>{{fItem.name}}</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Checkbox from '@/components/checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/checkbox/CheckboxGroup.vue';
import Button from '@/components/button/Button.vue';

interface GroupOptsEntity {
  value: string;
  age: string;
  label: string;
  disabled?: boolean;
  more?: boolean;
}

interface FlexListEntity {
  name: string;
  value: boolean;
}

@Component({
  components: {
    Checkbox,
    CheckboxGroup,
    Button,
  },
})
export default class CheckboxView extends Vue {
  baseStatus: boolean = true;

  disabledStatus: boolean = false;

  labelStatus: string = '';

  groupList: string[] = ['Apple'];

  groupOpts: GroupOptsEntity[] = [
    {
      value: 'Apple',
      label: 'Apple',
      age: '18岁',
    },
    {
      value: 'Pear',
      label: 'Pear',
      age: '38岁',
      disabled: true,
    },
    {
      value: 'more',
      label: 'mo1re',
      age: '68岁',
      more: true,
    },
  ];

  groupMore: boolean = false;

  flexList:FlexListEntity[] = [
    { name: '李红星', value: false },
    { name: '李世民', value: true },
  ];

  flexOnList: FlexListEntity[] = [
    { name: '李世民', value: true },
  ];

  changeDis() {
    this.disabledStatus = !this.disabledStatus;
  }

  changeBase() {
    this.baseStatus = !this.baseStatus;
  }

  changeGroup(list: any, checkStatus: any, item: any) {
    this.groupMore = checkStatus && item.more;
  }

  flexibleFn(item: FlexListEntity) {
    const index = this.flexOnList.findIndex(flexItem => flexItem.name === item.name);
    if (index > -1) {
      this.flexOnList.splice(index, 1);
    } else {
      this.flexOnList.push(item);
    }
  }

  checkAllFn(ttt: any) {
    this.flexList = !ttt.status ? this.flexList.map((item) => {
      item.value = false;
      return item;
    }).slice() : this.flexList;
    this.flexOnList = ttt.status ? this.flexList.map((item) => {
      item.value = ttt.status;
      return item;
    }).slice() : [];
  }
}
</script>
