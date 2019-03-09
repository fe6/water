# page 分页
> 采用分页的形式分隔长列表，每次只加载一个页面。

##  基本
<br>
<br>

<div>
  <w-page v-model="base" :total="50"></w-page>
</div>
<br>
<br>

##  更多
<br>
<br>

<div>
  <w-page v-model="more" :total="100"></w-page>
</div>
<br>
<br>

##  改变
<br>
<br>

<div>
  <w-page class="demo-page" v-model="change" :pageSize="Number(changeSize)" :total="100"></w-page>
  <w-select class="demo-select" v-model="changeSize" suffix=" 条/页">
    <w-option value="10">10 条/页</w-option>
    <w-option value="20">20 条/页</w-option>
    <w-option value="30">30 条/页</w-option>
    <w-option value="40">40 条/页</w-option>
  </w-select>
</div>
<br>
<br>

##  跳转
> 结合 `w-page-jump` 组件使用效果更佳， `w-page-jump` 只需 **v-model** 即可

<br>
<br>

<div>
  <w-page class="demo-page" v-model="jump" :total="100"></w-page>
  <w-page-jump v-model="jump"></w-page-jump>
</div>
<br>
<br>

##  大小
<br>
<br>

<div>
  <span>正常</span>
  <w-page class="demo-page" v-model="sizeData" :total="100"></w-page>
</div>
<br>
<div>
  <span>小版</span>
  <w-page class="demo-page" v-model="sizeData" :total="100" size="small"></w-page>
</div>
<br>
<br>

##  总数
<br>
<br>

<div>
  <span>Total 85 items</span>
  <w-page class="demo-page" :total="85" :pageSize="20"></w-page>
</div>
<br>
<div>
  <w-page class="demo-page" v-model="totalData" :total="totalAll" :pageSize="totalPageSize" :showTotal="(total, range) => `${range[0]}-${range[1]} of ${total} items`"></w-page>
</div>
<br>
<br>

##  上一步和下一步
<br>
<br>

<div>
  <w-page prevText="Previous" nextText="Next"></w-page>
</div>
<br>
<br>

##  简洁
<br>
<br>

<div>
  <w-page simple v-model="mini"></w-page>
</div>
<br>
<br>



## API

#### w-page 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|total|数据总数|Number|否|50|
|simple|当添加该属性时，显示为简单分页|Boolean|否|无|
|size|当为「small」时，是小尺寸分页|String|否|无|
|nextText|下一页文案|String|否|下一页|
|prevText|上一页文案|String|否|上一页|
|midleSize|数据过多的时候省略号中间的个数|Number|否|5|
|pageSize|每页条数|Number|否|10|
|change|改变的时候触发，返回 当前状态|Function|否|() => {}|
|showTotal|用于显示数据总量和当前数据顺序|Function(total, range)|否|() => {}|

#### w-page 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|当前状态|

#### w-page-jump 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|prefix|前缀文案|String|否|跳转|
|suffix|前缀文案|String|否|页|


<script>
import WPage from '../water/page/Page';
import WPageJump from '../water/page/PageJump';
import WSelect from '../water/select/Select';
import WOption from '../water/select/Option';
import WInput from '../water/form/input/Input';

export default {
  data() {
    return {
      base: 1,
      more: 5,
      change: 1,
      sizeData: 4,
      jump: 2,
      changeSize: '10',
      totalData: 1,
      totalPageSize: 20,
      totalAll: 125,
      mini: 2,
    };
  },
  methods: {
    jumpPage(ev) {
      this.jump = parseInt(ev.target.value);
      ev.target.value = '';
    },
  },
  components: {
    WPage,
    WPageJump,
    WSelect,
    WOption,
    WInput,
  },
};
</script>

<style lang="scss" scope>
@import '../water/select/style/select.scss';
@import '../water/select/style/option.scss';
@import '../water/page/style/page.scss';
@import '../water/page/style/pagejump.scss';

.demo {
  &-page,
  &-select {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
