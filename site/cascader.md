# Cascader 联级选择
> 级联选择框。

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 基本
> 省市区级联。

<br>
<br>

<w-cascader :option="baseOpts" v-model="empty" style="width: 280px;" />
<br>
<br>

##  默认值
> 默认值通过数组的方式指定。

<br>
<br>

<div>
  <w-cascader :option="baseOpts" v-model="full" style="width: 280px;" />
</div>
<br>
<br>

##  自定义显示
> 简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。

<br>
<br>

<div>
  {{diy}}
  <w-cascader :option="baseOpts" @change="baseChange" style="width: 280px; display: inline-block;">
    <a href="javascript:;">Change city</a>
  </w-cascader>
</div>
<br>
<br>

##  禁用选项
> 通过指定 options 里的 disabled 字段。

<br>
<br>

<w-cascader :option="disabledOpts" style="width: 280px;" />
<br>
<br>

## 选择即改变
> 这种交互允许只选中父级选项。

<br>
<br>

<div>
  <w-cascader :option="baseOpts" changeOnSelect v-model="full" style="width: 280px;" />
</div>
<br>
<br>

##  大小
> 简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。

<br>
<br>

<div>
  <w-cascader :option="baseOpts" size="large" style="width: 280px;" />
  <br>
  <w-cascader :option="baseOpts" style="width: 280px;" />
  <br>
  <w-cascader :option="baseOpts" size="small" style="width: 280px;" />
</div>
<br>
<br>

##  自定义已选项
> 例如给最后一项加上邮编链接。

<br>
<br>

<div>
  <w-cascader :option="baseOpts" :displayRender="displayRender" style="width: 280px;" />
</div>
<br>
<br>

##  动态加载

<br>
<br>

<div>
  <w-cascader :option="loadingOpts" :loading="loadingStatus" @change="loadingChange" :before="loadingBefore" style="width: 280px;" />
</div>
<br>
<br>

##  自定义字段名

<br>
<br>

<div>
  <w-cascader :option="diyOpts" :fieldNames="diyName" style="width: 280px;" />
</div>
<br>
<br>

##  搜索
> 可以直接搜索选项并选择

<br>
<br>

<div>
  <w-cascader :option="baseOpts" search style="width: 280px;" />
</div>
<br>
<br>

## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|option|可选项数据源|Array|否|() => []|
|change|选择完成后的回调， 返回 当前数据对象， Event 对象|Function|否|() => {}|
|emptyText|搜索未匹配到的文案|String|否|未匹配到结果|
|loading|加载模式|Boolean|否|无|
|disabled|禁用模式|Boolean|否|无|
|fieldNames|自定义 options 中 label name children 的字段|Object|否|{label: 'label',value: 'value',children: 'children'}|
|search|搜索模式|Boolean|否|无|
|searchWidth|搜索模式，弹框的宽度|String|否|220px|
|searchRender|搜索模式，搜索后展示的渲染函数|Function|否|无|
|size|尺寸大小。可选值： small, large, normal |String|否|normal|
|placeholder|输入框占位文本|String|否|请选择|
|changeOnSelect|当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示|Boolean|否|false|
|displayRender|选择后展示的渲染函数|Function|否|无|
|placement|下拉框位置，可参照[文字提示](./tooltip.md)|String|否|bottomLeft|
|interval|下拉框间距，单位 px|Number|否|8|
|transfer|是否转移到 body 下|Boolean|否|true|
|getContainer|浮层渲染父节点，默认渲染到 body 上|Function(triggerNode)|否|() => document.body|
|before|改变之前触发，返回 Promise 对象|Function|否|function() {return new Promise((resolve, reject) => {resolve();});}|
|click|点击选择框触发，返回 Event 对象|Function|否|() => {}|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|选择完成后的回调|当前数据对象， Event 对象|
|click|点击选择框触发|Event 对象|


<script>
import WCascader from '../water/cascader/Cascader';

let lastDiy = [];
let lastVNode = [];

export default {
  data() {
    return {
      diy: '',
      full: ['zhejiang', 'hangzhou', 'xihu'],
      empty: [],
      disabledOpts: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake',
            code: 100800,
          }],
        }],
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        disabled: true,
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          code: 105000,
        }],
      }],
      baseOpts: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake',
            code: 453400,
            disabled: true
          }],
        }],
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 900000,
          },{
            value: 'xihu2',
            label: 'West1 Lake',
            code: 100102,
          }],
        },{
          value: 'xihu11',
          label: 'West3 Lake',
          code: 300392,
        }],
      }, {
        value: 'beijing',
        label: 'Beijing',
        code: 100000,
      }],
      loadingGetDataTime: 1,
      loadingOpts: [],
      loadingStatus: false,
      diyOpts: [{
        code: 'zhejiang',
        name: 'Zhejiang',
        items: [{
          code: 'hangzhou',
          name: 'Hangzhou',
          items: [{
            code: 'xihu',
            name: 'West Lake',
          }],
        }],
      }, {
        code: 'jiangsu',
        name: 'Jiangsu',
        items: [{
          code: 'nanjing',
          name: 'Nanjing',
          items: [{
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          }],
        }],
      }],
      diyName: {
        value: 'code',
        label: 'name',
        children: 'items',
      },
    };
  },
  methods: {
    baseChange({value, current, option, index, floor, nextPanel}) {
      if (!nextPanel.length) {
        this.diy = value.join(', ');
      }
    },
    displayRender (h, { data, currentOption, result }) {
      const { option } = currentOption;
      if (lastDiy.toString() != result.toString()) {
        lastDiy = result.slice();
        lastVNode = h('div', {
          style: {
            overflow: 'hidden',
            ['text-overflow']: 'ellipsis',
          },
        }, data.map((dataItem, dataIndex) => {
          if (dataIndex === data.length - 1 && option.code) {
            return h('span', [`${dataIndex > 0 ? ' / ' : ''}${dataItem}(`, h('span', {
              style: {
                color: 'red',
              },
              }, option.code), ')']);
          }
          return h('span', `${dataIndex > 0 ? ' / ' : ''}${dataItem}`);
        }));
        return lastVNode;
      } else {
        return lastVNode;
      }
    },
    loadingBefore() {
      if (!this.loadingOpts.length) {
        this.loadingStatus = true;
        return new Promise((resolve) => {
          setTimeout(() => {
            this.loadingOpts.push({
              value: 'xihu',
              label: 'West3 Lake',
              code: 300392,
            });
            this.loadingOpts.push({
              value: 'nanjing',
              label: 'Nanjing',
              code: 300392,
            });
            this.loadingStatus = false;
            resolve();
          },2000);
        });
      } else {
        return new Promise((resolve) => {
          resolve();
        });
      }
    },
    loadingChange({value, current, option, index, floor, nextPanel}, ev) {
      if (this.loadingGetDataTime) {
        this.loadingGetDataTime = 0;
        this.loadingOpts.splice(index, 1, {
          ...option,
          loading: true,
        });
        setTimeout(() => {
          this.loadingOpts.splice(index, 1, {
            ...option,
            loading: false,
            children: [
              {
                value: 'xihu22',
                label: 'West3 Lake',
                code: 300392,
              }
            ],
          });
        },2000);
        ev.stopPropagation();
      }
    },
  },
  components: {
    WCascader,
  },
};
</script>
<style lang="scss">
@import '../water/cascader/style/cascader.scss';
</style>
