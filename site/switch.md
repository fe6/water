# Switch

> Switching Selector.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## Basic usage

> The simplest usage.

<w-switch></w-switch>

``` vue
<w-switch></w-switch>
```

## Icon usage

> With an icon.

<p>
  <w-switch>
    <span slot="open"><w-icon type="star"/></span>
    <span slot="close"><w-icon type="heart"/></span>
  </w-switch>
</p>

``` vue
<w-switch>
  <span slot="open"><w-icon type="star"/></span>
  <span slot="close"><w-icon type="heart"/></span>
</w-switch>
```

## Two sizes

> `size="small"` Indicates the small switch. The default is the standard size.

<div>
  <span>standard: </span><w-switch></w-switch>
</div>
<div>
  <span>Small: </span><w-switch size="small"></w-switch>
</div>

``` vue
<w-switch></w-switch>
<w-switch size="small"></w-switch>
```

## Loading usage

> The identification switch operation is still in progress. Set the `loading` property.

<p>
  <w-switch loading></w-switch>
</p>

``` vue
<w-switch loading></w-switch>
```

## Disable usage

> Set the `disabled` property

<p>
  <span>effect:</span>
  <w-switch :disabled="disabled">
    <span slot="open"><w-icon type="star"/></span>
    <span slot="close"><w-icon type="heart"/></span>
  </w-switch>
</p>
<p>
  <span>handle:</span>
  <w-switch v-model="disabled">
    <span slot="open">Disable</span>
    <span slot="close">Available</span>
  </w-switch>
</p>

``` vue
<p>
  <span>effect</span>
  <w-switch :disabled="disabled">
    <span slot="open"><w-icon type="star"/></span>
    <span slot="close"><w-icon type="heart"/></span>
  </w-switch>
</p>
<p>
  <span>handle</span>
  <w-switch v-model="disabled">
    <span slot="open">Disable</span>
    <span slot="close">Available</span>
  </w-switch>
</p>
```

``` js
export default {
  data() {
    return {
      disabled: false,
    };
  },
```

## Intercept usage

> The following example has a two second delay before each change.

<p>
  <w-switch :loading="isLoading" :before="before"></w-switch>
</p>

``` vue
<w-switch :loading="isLoading" :before="before"></w-switch>
```

``` js
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    before: async function() {
      this.isLoading = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isLoading = false;
          resolve()
        }, 2000);
      } )
    },
  },
};
```

## API

### Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|value|Status value|Boolean|No|-|
|v-model|Two-way data binding|Boolean|No|-|
|size|Size. Optional value: small \|\| normal |Number|String|No|normal|
|disabled|In the unavailable state, the click event is invalid, the style will also change|Boolean|No|-|
|loading|In the loading state, the click event is invalid, the style will also change|Boolean|No|-|
|before|Trigger before the change, return the Promise object|Function|No|-|
|change|Triggered when changing, returning to current state|Function|No|() => {}|

### Methods

|Name|Description|Return Value|
|-----|---|-----|
|change|Triggered when changing|Current state|

<script>
import WIcon from '../water/icon/Icon';
import WSwitch from '../water/switch/Switch';

export default {
  data() {
    return {
      val: true,
      isLoading: false,
      disabled: false,
    };
  },
  methods: {
    change(value) {
      this.val = !value;
    },
    before: async function() {
      this.isLoading = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isLoading = false;
          resolve()
        }, 2000);
      } )
    },
  },
  components: {
    WIcon,
    WSwitch,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/switch/style/switch.scss';
</style>
