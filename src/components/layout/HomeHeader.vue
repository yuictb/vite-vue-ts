<template>
  <div class="w-full headContainer">
    <div style="background: rgba(0, 0, 0, 0.3); height: 53px">
      <header class="w-1200px h-full m-auto flex items-center justify-between text-white">
        <div class="flex items-center">
          <div class="w-16 mr-24"><img src="@/assets/imgs/headerPic/logo.png" alt="" /></div>
          <ul class="flex items-center">
            <li
              class="p-4 mx-1 box-border cursor-pointer"
              :class="router.currentRoute.value.fullPath == item.path ? 'active' : ''"
              v-for="item in routerInfo"
              :key="item.name"
              @click="router.push(item.path)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="flex items-center">
          <img class="w-4 mr-2" src="@/assets/imgs/common/icon-电话.png" alt="" />
          <span>420-8238-7747</span>
        </div>
      </header>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router"
import routerInfo from "@/router/routerInfo"
const router = useRouter()
</script>
<style lang="less" scoped>
.headContainer {
  height: 230px;
  background: url("@/assets/imgs/headerPic/bg-noWords.png") no-repeat;
  background-size: 100% 100%;
}
.active {
  background: rgba(0, 0, 0, 0.4);
}
</style>
