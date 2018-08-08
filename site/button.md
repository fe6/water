# Button
> To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Button type usage

***output***

<div>
<w-button prefix="demo" type="primary">Primary</w-button>
<w-button prefix="demo">Default</w-button>
<w-button prefix="demo" type="dashed">Dashed</w-button>
<w-button prefix="demo" type="danger">Danger</w-button>
</div>

***input***

``` vue
<w-button prefix="demo" type="primary">Primary</w-button>
<w-button prefix="demo">Default</w-button>
<w-button prefix="demo" type="dashed">Dashed</w-button>
<w-button prefix="demo" type="danger">Danger</w-button>
```

## Icon button usage

***output***

<div>
  <w-button prefix="demo" type="primary" circle icon="loading3" />
  <w-button prefix="demo" type="primary" icon="loading3">Search</w-button>
  <w-button prefix="demo" circle icon="loading3" />
  <w-button prefix="demo" icon="loading3">Search</w-button>
  <br />
  <w-button prefix="demo" type="danger" circle icon="loading3" />
  <w-button prefix="demo" type="danger" icon="loading3">Search</w-button>
  <w-button prefix="demo" type="dashed" circle icon="loading3" />
  <w-button prefix="demo" type="dashed" icon="loading3">Search</w-button>
</div>

***input***

``` vue
<w-button prefix="demo" type="primary" circle icon="loading3" />
<w-button prefix="demo" type="primary" icon="loading3">Search</w-button>
<w-button prefix="demo" circle icon="loading3" />
<w-button prefix="demo" icon="loading3">Search</w-button>
<br />
<w-button prefix="demo" type="danger" circle icon="loading3" />
<w-button prefix="demo" type="danger" icon="loading3">Search</w-button>
<w-button prefix="demo" type="dashed" circle icon="loading3" />
<w-button prefix="demo" type="dashed" icon="loading3">Search</w-button>
```

## Loading state

***output***

<w-button prefix="demo" :loading="loadStatus" @click="changeLoadStatus">Click to load</w-button>
<w-button prefix="demo" :disabled="disableStatus" @click="changeDisableStatus">Click to disable</w-button>

***input***

``` vue
<w-button prefix="demo" :loading="loadStatus" @click="changeLoadStatus">Click to load</w-button>
<w-button prefix="demo" :disabled="disableStatus" @click="changeDisableStatus">Click to disable</w-button>
```

``` js
import WButton from './Button';

export default {
  data() {
    return {
      loadStatus: false,
      disableStatus: false,
    };
  },
  methods: {
    changeLoadStatus() {
      this.loadStatus = true;
    },
    changeDisableStatus() {
      this.disableStatus = true;
    },
  },
  components: {
    WButton,
  },
};
```

## Button combination

***output***

<p>Current：{{groupStatus}}, button size： {{groupConfig[groupStatus] || 'default'}}</p>
<w-button-group :on="groupStatus">
  <w-button prefix="demo" :key="0" @click="changeGroupStatus">Small</w-button>
  <w-button prefix="demo" :key="1" @click="changeGroupStatus">Medium</w-button>
  <w-button prefix="demo" :key="2" @click="changeGroupStatus">Large</w-button>
</w-button-group>

<w-button-group>
  <w-button prefix="demo" :size="groupConfig[groupStatus]" :key="1">Normal button</w-button>
  <w-button prefix="demo" type="danger" :size="groupConfig[groupStatus]" icon="star" :key="2">Icon button</w-button>
  <w-button prefix="demo" type="dashed" :size="groupConfig[groupStatus]" icon="heart" circle :key="3" />
</w-button-group>

***input***

``` vue
<p>Current：{{groupStatus}}, button size： {{groupConfig[groupStatus] || 'default'}}</p>
<w-button-group :on="groupStatus">
  <w-button prefix="demo" :key="0" @click="changeGroupStatus">Small</w-button>
  <w-button prefix="demo" :key="1" @click="changeGroupStatus">Medium</w-button>
  <w-button prefix="demo" :key="2" @click="changeGroupStatus">Large</w-button>
</w-button-group>

<w-button-group>
  <w-button prefix="demo" :size="groupConfig[groupStatus]" :key="1">Normal button</w-button>
  <w-button prefix="demo" type="danger" :size="groupConfig[groupStatus]" icon="star" :key="2">Icon button</w-button>
  <w-button prefix="demo" type="dashed" :size="groupConfig[groupStatus]" icon="heart" circle :key="3" />
</w-button-group>
```

``` js
import WButton from './Button';
import WButtonGroup from './ButtonGroup';

export default {
  data() {
    return {
      groupStatus: 2,
      groupConfig: ['small', '', 'large',],
    };
  },
  methods: {
    changeGroupStatus($event, index) {
      this.groupStatus = index;
    },
  },
  components: {
    WButton,
    WButtonGroup,
  },
};
```

## Ghost button

***output***

<div class="ghost">
  <w-button prefix="demo" ghost>Normal button</w-button>
  <w-button prefix="demo" type="danger" ghost icon="star">Icon button</w-button>
  <w-button prefix="demo" type="primary" ghost icon="heart" circle />
  <w-button prefix="demo" type="dashed" ghost icon="heart" />
</div>

***input***

``` vue
<div class="ghost">
  <w-button prefix="demo" ghost>Normal button</w-button>
  <w-button prefix="demo" type="danger" ghost icon="star">Icon button</w-button>
  <w-button prefix="demo" type="primary" ghost icon="heart" circle />
  <w-button prefix="demo" type="dashed" ghost icon="heart" />
</div>
```

## API

### w-button

#### Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|type|Can be set to primary ghost dashed danger(added in 2.7) or omitted (meaning default)|String|否|-|
|size|Can be set to `small`,`large`|String|No|-|
|icon|Set the icon type of the button|String|No|-|
|loading|Set button loading status|Boolean|No|-|
|circle|Set the button shape to a circle|Boolean|No|-|
|ghost|Ghost property to make the button background transparent|Boolean|No|-|
|disabled|The button is not available, the click event is invalid, and the style changes.|Boolean|No|-|
|htmlType|set the original html type of button, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)|String|No|button|
|prefix|Style prefix|String|No|-|
|className|Custom style class name|String\|Object|No|-|
|click|Bind button click event, used in this loop to change and pass parameters. Will return `Event object`, `index`|Function|No|() => {}|
|mouseover|The bind button mouse moves into the event, which is used when the this is changed and passed in the loop. Will return `Event object`, `index`|Function|No|() => {}|
|mouseout|Bind button mouse to move out of the event, this is used in the loop to change and pass parameters. Will return `Event object`, `index`|Function|No|() => {}|

#### Methods

|Name|Description|Return Value|
|-----|---|-----|
|click|Binding button click event|`Event object`, `index`|
|mouseover|Bind button mouse into event|`Event object`, `index`|
|mouseout|Bind button mouse out event|`Event object`, `index`|

### w-button-group

> If you need a custom index ( on ), you need to correspond to the subcomponent's key value.

#### Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|prefix|Style prefix|String|No|-|
|className|Custom style class name|String\|Object|No|-|
|on|Define the currently selected index. Must have subcomponent key corresponding|Number|No|0|

<script>
import WButton from '../water/button/Button';
import WButtonGroup from '../water/button/ButtonGroup';

export default {
  data() {
    return {
      groupStatus: 2,
      loadStatus: false,
      disableStatus: false,
      groupConfig: ['small', '', 'large',],
    };
  },
  methods: {
    changeGroupStatus($event, index) {
      this.groupStatus = index;
    },
    changeLoadStatus() {
      this.loadStatus = true;
    },
    changeDisableStatus() {
      this.disableStatus = true;
    },
  },
  components: {
    WButton,
    WButtonGroup,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/button/style/button.scss';

.demo {
  &-button {
    margin: 0 16px 16px 0;
    vertical-align: middle;
  }
}

.ghost {
  background: rgb(190, 200, 200);
  padding: 26px 16px 16px;
  margin: 16px 0
}
</style>
