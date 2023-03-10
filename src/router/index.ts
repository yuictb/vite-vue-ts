import { createRouter, createWebHashHistory } from "vue-router"
import Login from "@/views/login/Login.vue"
import HomeView from "@/views/home/HomeView.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      component: HomeView
    }
  ]
})

export default router
