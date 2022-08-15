<template>
  <a-layout-sider width="200">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-menu-item key="home">
        <router-link to="/home/index">Home</router-link>
      </a-menu-item>
      <a-sub-menu key="template">
        <template #title>
          <span> Template </span>
        </template>
        <a-menu-item key="template-antd">
          <router-link to="/template/antd">Ant Design</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="about">
        <router-link to="/about">About</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "LayoutSidebar",
  components: {},
  setup() {
    return {
      selectedKeys: ref<string[]>(["home"]),
      openKeys: ref<string[]>(["template"])
    };
  },
  computed: {}
};
</script>
