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
  },
  {
    path: "/common",
    name: "common",
    children: [
      {
        path: "not_found",
        component: () => import("../views/common/NotFound.vue")
      }
    ]
  },
  {
    path: "/i18n",
    name: "i18n",
    component: LayoutContainer,
    children: [
      {
        path: "antd",
        component: () => import("../views/i18n/I18nView.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
