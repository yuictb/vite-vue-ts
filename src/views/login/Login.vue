<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
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
