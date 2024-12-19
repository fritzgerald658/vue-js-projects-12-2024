<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <input type="text" v-model="props.modelValue" />
</template>
