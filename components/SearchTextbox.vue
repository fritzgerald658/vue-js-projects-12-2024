<script setup>
const props = defineProps(["searchQuery", "placeholder"]);
const emit = defineEmits(["update:searchQuery"]);

const updateSearchQuery = (e) => {
  emit("update:searchQuery", e.target.value);
};
</script>
<template>
  <input
    :value="searchQuery"
    @input="updateSearchQuery"
    type="text"
    :placeholder="placeholder"
  />
</template>
