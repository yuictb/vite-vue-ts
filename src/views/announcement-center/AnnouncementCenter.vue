<template>
  <div class="about">
    <h1>公告中心</h1>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
const value1 = ref("")
</script>
<style lang="less" scoped>
.about {
  h1 {
    color: red;
  }
}
</style>
