# Tag 标签

## 可选择
> 可通过 CheckTag 实现类似 Checkbox 的效果，点击切换选中效果

<div>
  <select @change="disSelFn" aria-label="disabled">
    <option value="">请选择禁用</option>
    <option v-for="(check, checkIndex) in checks" :key="checkIndex" :value="checkIndex">{{check.name}}</option>
  </select>
</div>
<p>
  <w-checktag :inline="true" v-for="(check, checkIndex) in checks" :key="checkIndex" :size="groupConfig[sizeStatus]" :disabled="check.disabled" v-model="check.status" @click.native="checkTag(checkIndex)">{{check.name}}</w-checktag>
</p>

## 三种大小
> 我们为 &lt;w-tag /&gt; 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。

<div>
  <span>尺寸：</span>
  <button :key="0" @click="changeGroupStatus($event, 0)" class="inp-btn" :class="{'on': sizeStatus === 0}">小</button>
  <button :key="1" @click="changeGroupStatus($event, 1)" class="inp-btn" :class="{'on': sizeStatus === 1}">中</button>
  <button :key="2" @click="changeGroupStatus($event, 2)" class="inp-btn" :class="{'on': sizeStatus === 2}">大</button>
  <button @click="disabled = !disabled" class="inp-btn" :class="{'on': disabled}">禁用</button>
</div>
<br>
<div>
  <w-tag :inline="true" :size="groupConfig[sizeStatus]" :disabled="disabled">标签</w-tag>
  <w-tag :inline="true" :size="groupConfig[sizeStatus]" :disabled="disabled" :closable="true">标签</w-tag>
</div>

## 多彩标签
> 我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

- 背景，边框颜色，文字颜色随设置的颜色变化

<transition-group class="w-tag-box" name="list" tag="div">
  <w-tag class="list-item" v-for="(color, colorIndex) in allColors" :key="color.color" :size="groupConfig[sizeStatus]" :color="color.color" :closable="true" :loading="color.loading" @close="closeTag('allColors', colorIndex)">标签</w-tag>
</transition-group>

- 背景和边框颜色统一是设置的颜色，文字为白色

<transition-group class="w-tag-box" name="list" tag="div">
  <w-tag class="list-item" v-for="(color, colorIndex) in sectionColors" :key="color.color" :size="groupConfig[sizeStatus]" :color="color.color" colorType="section" :closable="true" :loading="color.loading" @close="closeTag('sectionColors', colorIndex)">标签</w-tag>
</transition-group>

## API

#### Tag 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|closable|标签是否可以关闭|Boolean|否|无|
|size|尺寸设置。可选 large || small|String|否|无|
|disabled|是否禁用状态|Boolean|否|无|
|color|标签色|String|否|无|
|colorType|标签色的渲染类型，可选值： section 部分 || all 全部|String|否|all|
|inline|是否会一行显示，是否会有 display: inline-block 样式|Boolean|否|无|
|close|关闭的时候触发。会返回 `Event 对象`|Function|否|()=>{}|
|loading|处于加载中状态，点击事件失效，样式也会变|Boolean|否|无|
|stop|是否点击事件冒泡|Boolean|否|无|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|close|关闭的时候触发|`Event 对象`|

#### Checktag 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|closable|标签是否可以关闭|Boolean|否|无|
|size|尺寸设置。可选 large || small|String|否|无|
|disabled|是否禁用状态|Boolean|否|无|
|inline|是否会一行显示，是否会有 display: inline-block 样式|Boolean|否|无|

<script>
import WTag from '../water/tag/Tag';
import WChecktag from '../water/tag/CheckTag';

export default {
  data() {
    return {
      sectionColors: [{
        color: '#eb2f96',
        loading: false,
      },
      {
        color: '#f5222d',
        loading: false,
      },
      {
        color: '#fa541c',
        loading: false,
      },
      {
        color: '#fa8c16',
        loading: false,
      }],
      allColors: [{
        color: '#eb2f96',
        loading: false,
      }, {
        color: '#f5222d',
        loading: false,
      }, {
        color: '#fa541c',
        loading: false,
      }, {
        color: '#fa8c16',
        loading: false,
      }, {
        color: '#faad14',
        loading: false,
      }],
      disabled: false,
      sizeStatus: 0,
      groupConfig: ['small', '', 'large',],
      checks: [{
        disabled: false,
        name: '电影',
        status: true,
      },
      {
        disabled: false,
        name: '足球',
        status: false,
      },
      {
        disabled: false,
        name: '王者荣耀',
        status: false,
      }],
      checkStatus: '-1',
    };
  },
  methods: {
    changeGroupStatus($event, index) {
      this.sizeStatus = index;
    },
    checkTag(index) {
      const { name, status, disabled } = this.checks[index];
      if (!disabled) {
        this.checks.splice(index, 1, {
          name,
          status: !status,
          disabled,
        });
      }
    },
    closeTag(colors, index) {
      const { color } = this[colors][index];
      this[colors].splice(index, 1, {
        color,
        loading: true,
      });
      setTimeout(() => {
        this[colors].splice(index, 1);
      }, 1000);
    },
    disSelFn(event) {
      const { value } = event.target;
      this.checks.forEach((check, checkIndex) => {
        check.disabled = false;
        this.checks.splice(checkIndex, 1, check);
      });
      if (value !== '') {
        const { name, status, disabled } = this.checks[value];
        this.checks.splice(value, 1, {
          name,
          status,
          disabled: !disabled,
        });
      }
    },
  },
  components: {
    WTag,
    WChecktag,
  },
};
</script>
<style lang="scss">
@import '../water/tag/style/tag.scss';
@import '../water/tag/style/checktag.scss';

.w-tag {
  margin-bottom: 8px;

  &-box {
    display: flex;
    flex-flow: wrap;
  }
}

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

.list-leave-active {
  transition: all 0.3s;
}

.list-leave-to {
  opacity: 0;
  width: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-raduis: 0;
}
</style>
