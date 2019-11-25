<template>
  <div>
    <h1>{{ Log }}</h1>
    <p>
      <span class="log-text">Water 严格遵循</span>
      <WLink
        href="http://semver.org/lang/zh-CN/"
        target="_blank"
        class="log-link"
      >
        Semantic Versioning 2.0.0
      </WLink>
    </p>
    <div class="log-line">
      <WTimeline>
        <WTimelineItem
          :timestamp="item.date"
          v-for="(item, idx) in logs"
          :key="idx"
        >
          <Code class="log-date">2019-10-10</Code>
          <ul>
            <li
              v-for="(text, tIdx) in item.content"
              :key="tIdx"
              class="log-text"
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
  .w-timeline-timestamp {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .w-timeline-core {
    top: -12px;
  }
  .log {
    &-text {
      display: inline-block;
      vertical-align: middle;
    }

    &-link {
      margin: 0 4px;
      vertical-align: middle;

      & .w-link-text {
        font-size: 14px;
      }
    }

    &-line {
      padding-top: 40px;
    }

    &-date {
      margin: 1em 0 1em 20px;
      display: inline-block;
    }
  }
</style>
