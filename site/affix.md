# Affix
> Make an element stick to viewport.

## When To Use

When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.

Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.

## Basic usage

***output***
<w-affix :offsetTop="10" :index="200">
  <w-button type="danger">w-affix top</w-button>
</w-affix>

***input***

``` vue
<w-affix :offsetTop="10">
  <w-button type="danger">w-affix top</w-button>
</w-affix>
```

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

Some insignificant words.

## Bottom suspension usage

``` vue
<w-affix :offsetBottom="10">
  <w-button type="danger">w-affix bottom</w-button>
</w-affix>
```
<w-affix :offsetBottom="10">
  <w-button type="danger">w-affix bottom</w-button>
</w-affix>

## API

### Props

|Property|Description|Type|Required|Default|
|---|----|---|-------|-----|
|target|Sets the element that Affix needs to listen for its scroll event, and the value is a function that returns the corresponding DOM element.|() => HTMLElement|No|() => window|
|offsetTop|Triggered after reaching the specified offset from the top of the window|number|No|0|
|offsetBottom|Triggered after reaching the specified offset from the bottom of the window|number|No|0|
|index|Affix level|number|No|10|
|prefix|Style prefix|String|No|w|
|position|Set the positioning type. For optional values, please refer to the [CSS standard](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)|String|No|fixed|
|change|Callback function triggered when the fixed state changes|Function|No|Current targeting type|

### Methods

|Name|Description|Return Value|
|-----|---|-----|
|change|Callback function triggered when the fixed state changes|Current targeting type|

<script>
import WAffix from '../water/Affix';
import WButton from '../water/button/Button';

export default {
  components: {
    WAffix,
    WButton,
  },
};
</script>
<style lang="scss">
@import '../water/button/style/button.scss';
</style>
