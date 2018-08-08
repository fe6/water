# Breadcrumb
> A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When To Use

- When the system has more than two layers in a hierarchy;
- When you need to inform the user of where they are;
- When the user may need to navigate back to a higher level;
- When the application has multi-layer architecture;

## Code demo

***output***

<w-breadcrumb prefix="demo" class="demo1111">
  <w-breadcrumb-item prefix="demo" class="demo-item1" separator=">" :to="{ path: '/button' }">Internal jump to button</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item2" separator="<b class='demo'>|</b>">Custom interval symbol</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item4" open="https://qq.com">Outer jump Tencent</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item3" href="https://baidu.com">Outer jump baidu</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item5">now</w-breadcrumb-item>
</w-breadcrumb>

***input***

``` vue
<w-breadcrumb prefix="demo" class="demo1111">
  <w-breadcrumb-item prefix="demo" class="demo-item1" separator=">" :to="{ path: '/button' }">Internal jump to button</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item2" separator="<b class='demo'>|</b>">Custom interval symbol</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item4" open="https://qq.com">Outer jump Tencent</w-breadcrumb-item>
  <w-breadcrumb-item prefix="demo" class="demo-item3" href="https://baidu.com">Outer jump baidu</w-breadcrumb-item>
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

#### Props

|Property|Description|Type|Required|Default|
|---|----|---|-------|-----|
|prefix|Style prefix|String|No|-|

### w-breadcrumb-item

#### Props

|Property|Description|Type|Required|Default|
|---|----|---|-------|-----|
|separator|Custom separator|String \| Element String|No|-|
|to|vue-router jump|Object|No|() => {}|
|routerType|vue-router type of jump。Optional parameters, please move step by step [programmatic navigation](https://router.vuejs.org/zh-cn/essentials/navigation.html)|Object|No|() => {}|
|href|This page jumps outside the chain|String|No|-|
|open|New tab page opens the outer chain|String|No|-|
|prefix|Style prefix|String|No|-|
|click|Bind button click event, context change in loop and use when passing parameters|Function|No|() => {}|

#### Methods

|Name|Description|Return Value|
|-----|---|-----|
|click|Binding button click event|-|

<script>
import WBreadcrumb from '../water/breadcrumb/Breadcrumb';
import WBreadcrumbItem from '../water/breadcrumb/BreadcrumbItem';
import WIcon from '../water/icon/Icon';

export default {
  components: {
    WIcon,
    WBreadcrumb,
    WBreadcrumbItem,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/breadcrumb/style/breadcrumb.scss';
@import '../water/icon/style/icon.scss';

.demo {
  color: #1996f5;
  font-weight: normal;
}
</style>
