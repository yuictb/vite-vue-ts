import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import HomeView from "@/views/home/HomeView.vue"
import routerInfo from "./routerInfo"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: { name: "首页" },
    children: [...routerInfo]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
