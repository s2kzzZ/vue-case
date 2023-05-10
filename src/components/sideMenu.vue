<template>
  <el-menu
    default-active="/"
    background-color="#fff"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item v-for="item in menuArr" :index="item.path">
      <span>{{ item.name }}</span>
    </el-menu-item>
    <!-- <el-menu-item index="aboutView">
      <span>about</span>
    </el-menu-item>
    <el-menu-item index="input">
      <span>组件封装</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
let menuArr: Array<any> = reactive([]);
const router = useRouter();
menuArr = [...router.options.routes];
// console.log(menuArr);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
}
</style>
