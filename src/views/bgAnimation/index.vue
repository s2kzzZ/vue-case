/** Houdini API 自定义css属性 实现背景图片动画 */
<template>
  <div class="container">
    <h1>something</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
// css自定义属性  Houdini API
@property --direc {
  syntax: '<angle>'; //属性类型 length等等都可
  initial-value: 0deg; //默认值
  inherits: false; //是否可继承
}
.container {
  --direc: 20deg;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-image: linear-gradient(
    var(--direc),
    #dd5642,
    #c77e78,
    #9ea0b0,
    #32beeb
  );
  animation: bgmove 5s infinite linear;
  // background-size: 200%;
}
@keyframes bgmove {
  to {
    --direc: 360deg;
  }
}
</style>
