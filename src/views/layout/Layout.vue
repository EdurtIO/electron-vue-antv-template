<template>
  <a-layout-header>
    <layout-header></layout-header>
  </a-layout-header>
  <a-layout class="layout">
    <layout-sidebar></layout-sidebar>
    <a-layout-content style="padding: 0 50px">
      <layout-content></layout-content>
    </a-layout-content>
  </a-layout>
  <layout-footer></layout-footer>
</template>

<script>
import LayoutSidebar from "@/views/layout/components/LayoutSidebar";
import LayoutFooter from "@/views/layout/components/LayoutFooter";
import LayoutContent from "@/views/layout/components/LayoutContent";
import LayoutHeader from "@/views/layout/components/LayoutHeader";

export default {
  name: "LayoutContainer",
  components: { LayoutHeader, LayoutContent, LayoutFooter, LayoutSidebar },
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
