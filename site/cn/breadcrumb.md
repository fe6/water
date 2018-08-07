# Breadcrumb面包屑
> 显示当前页面在系统层级结构中的位置，并能向上返回。

## 如何使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时；
- 当应用程序具有多层体系结构时；

## 代码演示

***output***

<w-breadcrumb prefix="demo" class="demo1111">
  <w-breadcrumb-item prefix="demo" class="demo-item1" separator=">" :to="{ path: '/button/zh-cn.html' }">内部跳转到按钮</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item2" separator="<b class='demo'>|</b>">自定义间隔符号</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item4" open="https://qq.com">外跳qq</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item3" href="https://baidu.com">外跳baidu</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item5">now</w-breadcrumb-item>
</w-breadcrumb>

***input***

``` vue
<w-breadcrumb prefix="demo" class="demo1111">
  <w-breadcrumb-item prefix="demo" class="demo-item1" separator=">" :to="{ path: '/button/zh-cn' }">内部跳转</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item2" separator="<b class='demo'>|</b>">自定义间隔符号</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item4" open="https://qq.com">外跳qq</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item3" href="https://baidu.com">外跳baidu</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item5">now</w-breadcrumb-item>
</w-breadcrumb>
```

``` js
import WBreadcrumb from './Breadcrumb';
import WBreadcrumbItem from './BreadcrumbItem';
import WIcon from '../icon/Icon';

export default {
  components: {
    WIcon,
    WBreadcrumb,
    WBreadcrumbItem,
  },
};
```

## API

### w-breadcrumb

#### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|prefix|样式的前缀|String|否|无|

### w-breadcrumb-item

#### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|separator|自定义分隔符|String \| Element String|否|-|
|to|vue-router跳转|Object|否|() => {}|
|routerType|vue-router跳转的类型。可选参数请移步 [编程式的导航](https://router.vuejs.org/zh-cn/essentials/navigation.html)|Object|否|() => {}|
|href|本页面跳转外链|String|否|无|
|open|新标签页打开外链|String|否|无|
|prefix|样式的前缀|String|否|无|
|click|绑定按钮点击事件，循环中 this 改变并传参时使用|Function|否|() => {}|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|click|绑定按钮点击事件|无|

<script>
import WBreadcrumb from '../../water/breadcrumb/Breadcrumb';
import WBreadcrumbItem from '../../water/breadcrumb/BreadcrumbItem';
import WIcon from '../../water/icon/Icon';

export default {
  components: {
    WIcon,
    WBreadcrumb,
    WBreadcrumbItem,
  },
};
</script>
<style lang="scss">
$font-path: '../../water/font/';
@import '../../water/breadcrumb/style/breadcrumb.scss';
@import '../../water/icon/style/icon.scss';

.demo {
  color: #1996f5;
  font-weight: normal;
}
</style>
