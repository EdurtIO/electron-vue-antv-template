<template>
  <div class="logo" />
  <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
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
</template>

<script>
export default {
  name: "LayoutHeader",
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
