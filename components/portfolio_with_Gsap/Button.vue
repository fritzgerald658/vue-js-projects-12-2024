<template>
  <button class="btn btn-neutral text-white font-heading">{{ content }}</button>
</template>
<script setup>
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
});
</script>
