<template>
  <div>
    <myInput ref="inputRef" v-model="data" :placeholder="placeholder">
      <template #prepend>
        <el-select
          v-model="selectValue"
          placeholder="请选择"
          style="width: 120px"
        >
          <el-option lable="a" value="option1"></el-option>
          <el-option lable="b" value="option2"></el-option>
          <el-option lable="c" value="option3"></el-option>
        </el-select>
      </template>
    </myInput>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import myInput from "./components/myInput.vue";
const data = ref("");
const placeholder = ref("请输入");
const selectValue = ref("");
const inputRef = ref<any>(null);
nextTick(() => {
  // console.log(inputRef.value);
  inputRef.value?.focus();
});
</script>
