<template>
  <div>
    <HomeHeader />
    <main class="w-1200px mt-5 mx-auto bg-gray-200"><router-view></router-view></main>
  </div>
</template>
<script setup lang="ts">
import HomeHeader from "@/components/layout/HomeHeader.vue"
</script>
<style scoped lang="less"></style>
