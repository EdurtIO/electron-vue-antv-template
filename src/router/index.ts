import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LayoutContainer from "@/views/layout/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LayoutContainer
  },
  {
    path: "/home",
    name: "home",
    redirect: "/home/index",
    component: LayoutContainer,
    children: [
      {
        path: "index",
        component: () => import("@/views/HomeView.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    redirect: "/about/index",
    component: LayoutContainer,
    children: [
      {
        path: "index",
        component: () => import("../views/AboutView.vue")
      }
    ]
  },
  {
    path: "/template",
    name: "template",
    component: LayoutContainer,
    children: [
      {
        path: "antd",
        component: () => import("../template/AntdTemplate.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
