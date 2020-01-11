/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '信息提示',
  desc: '各种类型的信息提示。<code>0.13.0</code> 新增。',
  code: `<w-button @click="info">Info</w-button>
<w-button @click="success">Success</w-button>
<w-button @click="error">Error</w-button>
<w-button @click="warning">Warning</w-button>
<w-button @click="confirmFn">Confirm</w-button>`,
  js: `{
  methods: {
    info() {
      this.$WConfirm.info({
        title: '确认要删除这条信息吗？',
        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
      });
    },
    success() {
      this.$WConfirm.success({
        title: '确认要删除这条信息吗？',
        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
      });
    },
    error() {
      this.$WConfirm.error({
        title: '确认要删除这条信息吗？',
        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
      });
    },
    confirmFn() {
      this.$WConfirm.confirm({
        title: '确认要删除这条信息吗？',
        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
      });
    },
    warning() {
      this.$WConfirm.warning({
        title: '确认要删除这条信息吗？',
        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
      });
    },
  },
}`,
};

export default base;
