<template>
  <div>
    <div>
      <!-- <w-row
        justify="center"
        align="middle"
        className="demo-grid-row"
        type="float"
      >
        <w-col
          :span="24"
          :xs="2"
          :sm="2"
          :md="2"
          :lg="2"
          :xl="2"
          :xxl="2"
          :pull="6"
          :className="['demo-grid-col', 'demo-grid-text']"
        >100%</w-col>
      </w-row> -->
      <w-row
        justify="center"
        align="middle"
        className="demo-grid-row"
        class="demo-grid-first"
      >
        <w-col
          :span="24"
          :className="['demo-grid-col', 'demo-grid-text']"
        >100%</w-col>
      </w-row>
      <!-- <w-row
        justify="center"
        align="middle"
        className="demo-grid-row"
      >
        <w-col
          :span="12"
          v-for="(a, aIndex) in 2"
          :key="aIndex"
          :className="['demo-grid-col', 'demo-grid-text']"
        >50%</w-col>
      </w-row>
      <w-row
        justify="center"
        align="middle"
        className="demo-grid-row">
        <w-col
          :span="8"
          v-for="(a, aIndex) in 3"
          :order="3-aIndex"
          :key="aIndex"
          :className="['demo-grid-col', 'demo-grid-text']"
        >33.33%-{{aIndex}}</w-col>
      </w-row> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';

@Component({
  components: {
    WRow,
    WCol,
  },
})
export default class GridView extends Vue {
}
</script>

<style lang="scss">
@import '../assets/style/grid.scss';
</style>
