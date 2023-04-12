<!-- 
  组件封装
  1.通过userAttrs()直接获取父组件传来的内容，无需分别单独写
  2.父组件传递几个插槽就是使用传递的几个
  3.父组件通过ref调用子组件ref上的方法
 -->
<template>
  <div class="my-input">
    <el-input ref="inp" v-bind="attrs">
      <template v-for="(value, name) in slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, useAttrs, useSlots } from "vue";
const attrs = useAttrs();
const slots = useSlots();
const inp = ref(null);
interface DefineExposeObj {
  [key: string]: any;
}
const defineExposeObj: DefineExposeObj = {}; // ref上的所有方法
onMounted(() => {
  // console.log("inp", inp.value);
  const entries = Object.entries(inp);
  for (const [key, value] of entries) {
    defineExposeObj[key] = value;
  }
});
defineExpose(defineExposeObj);
</script>

<style scoped lang="scss">
.my-input {
  transition: 0.3s;

  &:hover,
  &:focus-within {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
  }
}
</style>
