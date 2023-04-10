<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import sideMenu from "./components/sideMenu.vue";
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <sideMenu />
    </el-aside>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped></style>
