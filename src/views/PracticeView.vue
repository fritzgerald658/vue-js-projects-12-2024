<script setup>
import { ref } from "vue";
import Random from "../../components/Random.vue";

const modelValue = ref("");
console.log(modelValue);
</script>
<template>
  <Random v-model="modelValue" />
</template>
