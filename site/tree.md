# Tree 树形控件

##  基本
> 默认全部展开

<br>
<br>

<div>
  <w-tree :data="base" v-model="baseNow"></w-tree>
</div>
<br>
<br>

##  展开特定节点

<br>
<br>

<div>
  <w-tree :data="base" v-model="baseNow" :open="open"></w-tree>
</div>
<br>
<br>

##  自定义字段名

<br>
<br>

<div>
  <w-tree :data="diy" v-model="baseNow" :open="open" :fieldNames="{ title: 'name', key: 'label', children: 'sub' }"></w-tree>
</div>
<br>
<br>

## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|data|展示数据|Array|否|[]|
|open|默认展开指定的树节点|Array|否|[]|
|change|点击改变的触发， 返回： 当前点击的标题， 当前选中的数据， 左右选中的数据， Event 对象|Function|否|() => {}|
|fieldNames|自定义 options 中 label name children 的字段|Object|否|{key: 'key',title: 'title',children: 'children'}|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|点击改变的触发|当前点击的标题， 当前选中的数据， 左右选中的数据， Event 对象|


<script>
import WTree from '../water/tree/tree';

export default {
  data() {
    return {
      baseNow: ['0-0-0'],
      open: ['0-0', '0-0-0'],
      base: [{
        title: '0-0',
        key: '0-0',
        children: [{
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        }, {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        }, {
          title: '0-0-2',
          key: '0-0-2',
        }],
      }, {
        title: '0-1',
        key: '0-1',
        children: [
          { title: '0-1-0-0', key: '0-1-0-0' },
          { title: '0-1-0-1', key: '0-1-0-1' },
          { title: '0-1-0-2', key: '0-1-0-2' },
        ],
      }, {
        title: '0-2',
        key: '0-2',
      }],
      diy: [{
        name: '0-0',
        label: '0-0',
        sub: [{
          name: '0-0-0',
          label: '0-0-0',
          sub: [
            { name: '0-0-0-0', label: '0-0-0-0' },
            { name: '0-0-0-1', label: '0-0-0-1' },
          ],
        }, {
          name: '0-0-1',
          label: '0-0-1',
          sub: [
            { name: '0-0-1-0', label: '0-0-1-0' },
            { name: '0-0-1-1', label: '0-0-1-1' },
            { name: '0-0-1-2', label: '0-0-1-2' },
          ],
        }],
      }, {
        name: '0-2',
        label: '0-2',
      }],
    };
  },
  components: {
    WTree,
  },
};
</script>
<style lang="scss">
@import '../water/tree/style/tree.scss';
</style>
