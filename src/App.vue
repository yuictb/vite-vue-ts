<script setup lang="ts">
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
const locale = zhCn
</script>

<template>
  <ElConfigProvider :locale="locale">
    <router-view></router-view>
  </ElConfigProvider>
</template>
<style scoped lang="less"></style>
