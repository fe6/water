<template>
  <div>
    <h1>{{ Log }}</h1>
    <div class="log-line">
      <WTimeline>
        <WTimelineItem
          :timestamp="item.version"
          v-for="(item, idx) in logs"
          :key="idx"
        >
          <Code class="log-date">{{ item.date }}</Code>
          <ul>
            <li
              v-for="(text, tIdx) in item.content"
              :key="tIdx"
              class="log-item"
            >
              <span class="log-text">{{ text }}</span>
              <WLink
                :href="item.url[tIdx].href"
                target="_blank"
                class="log-link"
              >
                {{ item.url[tIdx].text }}
              </WLink>
              <WLink
                :href="item.git[tIdx].href"
                target="_blank"
                class="log-link"
              >
                {{ item.git[tIdx].name }}
              </WLink>
            </li>
          </ul>
        </WTimelineItem>
      </WTimeline>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { TITLE } from '@/views/common/constant';
  import WLink from '@/components/link/src/Link.vue';
  import WTimeline from '@/components/timeline/src/Timeline.vue';
  import WTimelineItem from '@/components/timeline/src/TimelineItem.vue';
  import logs from '@/views/common/logs';

  @Component({
    components: {
      WLink,
      WTimeline,
      WTimelineItem,
    },
  })
  export default class LogView extends Vue {
    Log: string = TITLE.Log;

    logs: any[] = logs;
  }
</script>

<style lang="scss" scope>
  @import '~assets/style/log.scss';
</style>
