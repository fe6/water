<!-- @format -->

<template>
  <div>
    <WTimeline mode="right">
      <WTimelineItem timestamp="2019-10-10" color="#f5222d">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div>
      </WTimelineItem>
      <WTimelineItem timestamp="2019-10-10" color="#f5222d">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div>
      </WTimelineItem>
    </WTimeline>
    <hr />
    <WTimeline mode="alternate">
      <WTimelineItem timestamp="2019-10-10" color="#f5222d">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div>
      </WTimelineItem>
      <WTimelineItem timestamp="2019-10-10" color="#f5222d">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div>
      </WTimelineItem>
    </WTimeline>
    <hr />
    <WTimeline mode="alternate">
      <WTimelineItem timestamp="2019-10-10">1111</WTimelineItem>
      <WTimelineItem timestamp="2019-10-10" color="#52c41a">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div></WTimelineItem
      >
      <WTimelineItem timestamp="2019-10-10" color="#1890ff">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div>
      </WTimelineItem>
      <WTimelineItem timestamp="2015-09-01" color="#f5222d">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div>
      </WTimelineItem>
    </WTimeline>
    <hr />
    <WTimeline>
      <WTimelineItem timestamp="2019-10-10">1111</WTimelineItem>
      <WTimelineItem timestamp="2019-10-10" color="#52c41a">1111</WTimelineItem>
      <WTimelineItem timestamp="2019-10-10" color="#1890ff">1111</WTimelineItem>
      <WTimelineItem timestamp="2015-09-01" color="#f5222d">
        <div>Solve initial network problems 1</div>
        <div>Solve initial network problems 2</div>
        <div>Solve initial network problems 3</div>
      </WTimelineItem>
    </WTimeline>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WTimeline from '@/components/timeline/src/Timeline.vue';
  import WTimelineItem from '@/components/timeline/src/TimelineItem.vue';

  @Component({
    components: {
      WTimeline,
      WTimelineItem,
    },
  })
  export default class TimelineView extends Vue {}
</script>
