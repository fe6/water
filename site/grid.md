# Grid

## 24 Grids System。
<w-row type="flex" justify="center" align="middle" className="demo-row" class="demo-first">
  <w-col :span="24" className="demo-col" class="demo-text">100%</w-col>
</w-row>
<w-row type="flex" justify="center" align="middle" className="demo-row">
  <w-col :span="12" v-for="(a, aIndex) in 2" :key="aIndex" className="demo-col" class="demo-text">50%</w-col>
</w-row>
<w-row type="flex" justify="center" align="middle" className="demo-row">
  <w-col :span="8" v-for="(a, aIndex) in 3" :key="aIndex" className="demo-col" class="demo-text">33.33%</w-col>
</w-row>

In most business situations, Water needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 aliquots.

We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.

## Outline

In the grid system, we define the frame outside the information area based on row and column, to ensure that every area can have stable arrangement.

Following is a brief look at how it works:

- Establish a set of column in the horizontal space defined by row (abbreviated col)
- Your content elements should be placed directly in the col, and only col should be placed directly in row
- The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by .col-8 (span=8).
- If the sum of col spans in a row are more than 24, then the overflowing col as a whole will start a new line arrangement.

## Flex layout

Our grid systems support Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using `order`.

Flex layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.

## Basic Grid

***output***
<w-row className="demo-row" class="demo-second">
  <w-col :span="8" className="demo-col">
    <div class="demo-text">col-8</div>
  </w-col>
  <w-col :span="8" className="demo-col">
    <div class="demo-text">col-8</div>
  </w-col>
  <w-col :span="8" className="demo-col">
    <div class="demo-text">col-8</div>
  </w-col>
</w-row>
<w-row className="demo-row">
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" class="demo-second">
  <w-col :span="8" className="demo-col">
    <div class="demo-text">col-8</div>
  </w-col>
  <w-col :span="8" className="demo-col">
    <div class="demo-text">col-8</div>
  </w-col>
  <w-col :span="8" className="demo-col">
    <div class="demo-text">col-8</div>
  </w-col>
</w-row>
<w-row className="demo-row">
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
  <w-col :span="6" className="demo-col">
    <div class="demo-text">col-6</div>
  </w-col>
</w-row>
```

## Grid Gutter

***output***

<w-row :gutter="16" className="demo-row" class="demo-second">
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
</w-row>

***input***

``` vue
<w-row :gutter="16" className="demo-row" class="demo-second">
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
  <w-col :span="6" className="demo-col" class="demo-text">col-6</w-col>
</w-row>
```

## Grid Order

***output***

<w-row className="demo-row" type="flex" class="demo-second">
  <w-col :span="6" className="demo-col" :order="4" class="demo-text">1 | order-4</w-col>
  <w-col :span="6" className="demo-col" :order="3" class="demo-text">2 | order-3</w-col>
  <w-col :span="6" className="demo-col" :order="2" class="demo-text">3 | order-4</w-col>
  <w-col :span="6" className="demo-col" :order="1" class="demo-text">4 | order-1</w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" type="flex" class="demo-second">
  <w-col :span="6" className="demo-col" :order="4" class="demo-text">1 | order-4</w-col>
  <w-col :span="6" className="demo-col" :order="3" class="demo-text">2 | order-3</w-col>
  <w-col :span="6" className="demo-col" :order="2" class="demo-text">3 | order-4</w-col>
  <w-col :span="6" className="demo-col" :order="1" class="demo-text">4 | order-1</w-col>
</w-row>
```

## Grid Sort

***output***

<w-row className="demo-row" class="demo-second">
  <w-col :span="18" :pull="6" className="demo-col" class="demo-text">col-18 | pull-6</w-col>
  <w-col :span="6" :push="18" className="demo-col" class="demo-text">col-6 | push-18</w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" class="demo-second">
  <w-col :span="18" :pull="6" className="demo-col" class="demo-text">col-18 | pull-6</w-col>
  <w-col :span="6" :push="18" className="demo-col" class="demo-text">col-6 | push-18</w-col>
</w-row>
```

## Grid Offset

***output***

<w-row className="demo-row" class="demo-second">
  <w-col :span="8" className="demo-col" class="demo-text">col-8</w-col>
  <w-col :span="8" className="demo-col" :offset="8" class="demo-text">col-8 | offset-8</w-col>
</w-row>
<br>
<w-row className="demo-row">
  <w-col :span="6" className="demo-col" :offset="8" class="demo-text">col-6 | offset-8</w-col>
  <w-col :span="6" className="demo-col" :offset="4" class="demo-text">col-6 | offset-4</w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" class="demo-second">
  <w-col :span="8" className="demo-col" class="demo-text">col-8</w-col>
  <w-col :span="8" className="demo-col" :offset="8" class="demo-text">col-8 | offset-8</w-col>
</w-row>
<br>
<w-row className="demo-row">
  <w-col :span="6" className="demo-col" :offset="8" class="demo-text">col-6 | offset-8</w-col>
  <w-col :span="6" className="demo-col" :offset="4" class="demo-text">col-6 | offset-4</w-col>
</w-row>
```

## Grid Arrangement

***output***

<w-row className="demo-row" type="flex" justify="start" align="top" class="demo-second">
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" type="flex" justify="start" align="top" class="demo-second">
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
</w-row>
```

## Top Alignment

***output***

<w-row className="demo-row" type="flex" justify="center" align="top" class="demo-second">
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" type="flex" justify="center" align="top" class="demo-second">
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4 </w-col>
</w-row>
```

## Bottom Alignment

***output***

<w-row className="demo-row" type="flex" justify="center" align="bottom" class="demo-second">
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" type="flex" justify="center" align="bottom" class="demo-second">
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
  <w-col :span="4" className="demo-col" class="demo-text">col-4</w-col>
</w-row>
```

## Grid Responsive

***output***

<w-row className="demo-row" class="demo-second">
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" class="demo-second">
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
</w-row>
```

## Grid Other Properties

***output***

<w-row className="demo-row" class="demo-second">
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
</w-row>

***input***

``` vue
<w-row className="demo-row" class="demo-second">
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
  <w-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" className="demo-col" class="demo-text">w-col</w-col>
</w-row>
```

## API

### w-row Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|gutter|Grid spacing, in units of px, equally divided. Range: 0 ~ 48 |Number|No|0|
|basin|Vertical grid spacing, in units of px, equally divided up and down. Range: 0 ~ 48|Number|No|0|
|type|Layout mode, optional value is flex or not selected. Flex works in modern browsers.|String|No|-|
|align|Vertical alignment under flex layout, optional values are top , middle , bottom .|String|No|-|
|justify|The horizontal arrangement under the flex layout, the optional values are start , end , center , space-around , space-between .|String|No|-|
|className|Custom class name. Will be added at the end.|String \| Object|No|-|
|tag|Custom label name.|String|No|div|
|prefix|The prefix name of the custom class. Append at the end, but before className.|String|No|-|

### w-col Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|span|The number of placeholders in the grid. The value is an integer from 0 to 24. When 0, it is equivalent to display: none.|Number|No|-|
|tag|Custom label name|String|No|div|
|offset|The number of compartments on the left side of the grid. There should be no grids in the interval.|Number|No|-|
|push|The grid moves to the right|Number|No|-|
|pull|The grid moves to the left|Number|No|-|
|order|Define the order in which elements are arranged|Number|No|-|
|className|Custom class name. Will be added at the end.|String \| Object|No|-|
|prefix|The prefix name of the custom class. Append at the end, but before className.|String|No|-|
xs|>= 576px responsive raster, which can be a raster number or an object with other attributes|	Number \| Object|No|-|
sm|≥ 576px responsive raster, which can be a raster number or an object with other attributes|	Number \| Object|No|-|
md|≥ 768px responsive raster, which can be a raster number or an object with other attributes|	Number \| Object|No|-|
lg|≥ 992px responsive raster, which can be a raster number or an object with other attributes|	Number \| Object|No|-|
xl|≥ 1200px responsive raster, which can be a raster number or an object with other attributes|	Number \| Object|No|-|
xxl|≥ 1600px responsive raster, which can be a raster number or an object with other attributes|	Number \| Object|No|-|

<script>
import { WCol, WRow } from '../water/grid/index';

export default {
  components: {
    WCol,
    WRow,
  },
};
</script>

<style lang="scss">
@import '../water/grid/style/col.scss';
@import '../water/grid/style/row.scss';

.demo {
  &-first {
    margin-top: 24px !important;
  }

  &-second {
    margin-top: 16px !important;
  }

  &-row {
    margin-bottom: 8px;
    background-image: linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);
  }

  &-col {
    color: #333;

    &:nth-of-type(odd) {
      color: #fff;
      background: rgba(25, 150, 249, 0.5);
    }
  }

  &-text {
    padding: 30px 0;
    text-align: center;
    font-size: 30px;
    line-height: 1;
  }
}
</style>
