<template>
  <div class="change-locale" style="margin-top: 10px">
    <span style="margin-right: 16px">Change locale:</span>
    <a-radio-group v-model:value="locale">
      <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
    </a-radio-group>
  </div>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        <a-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <a-date-picker />
        <a-time-picker />
        <a-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <a-button type="primary" @click="visible = true">Show Modal</a-button>
        <a-button @click="info">Show info</a-button>
        <a-button @click="confirm">Show confirm</a-button>
        <a-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </a-popconfirm>
      </div>
      <div class="example">
        <a-transfer :data-source="[]" show-search :target-keys="[]" :render="(item) => item.title" />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <a-calendar :fullscreen="false" />
      </div>
      <div class="example">
        <a-table :data-source="[]" :columns="columns" />
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import { Modal } from "ant-design-vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { defineComponent, ref, watch } from "vue";

dayjs.locale("en");

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "filter1",
        value: "filter1"
      }
    ]
  }
];

export default defineComponent({
  setup() {
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, (val) => {
      dayjs.locale(val);
    });
    const info = () => {
      Modal.info({
        title: "some info",
        content: "some info"
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: "some info",
        content: "some info"
      });
    };
    return {
      columns,
      visible,
      locale,
      dayjs,
      enUS,
      zhCN,
      info,
      confirm
    };
  }
});
</script>

<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}

.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
</style>
