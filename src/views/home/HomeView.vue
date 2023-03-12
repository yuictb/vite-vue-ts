<template>
  <div class="test">
    <HomeHeader />
    <el-button @click="loading" type="primary" plain>Primary</el-button>
    <div class="text-red-500 w-1200px bg-yellow-300">首页</div>
  </div>
</template>
<script setup lang="ts">
import HomeHeader from "@/components/layout/HomeHeader.vue"
import { useUserInfo } from "@/stores/userInfo"
import { login } from "@/apis/index"
const { setInfo } = useUserInfo()
async function loading() {
  const res = await login({ account: "17751267600", password: "admin123456" })
  console.log(res)
  if (res.code === "000000") {
    console.log(res.data)
    setInfo(res.data)
  }
}
</script>
<style scoped lang="less"></style>
