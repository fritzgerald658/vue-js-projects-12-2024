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
    class="bg-neutral border-none input input-bordered input-sm w-full max-w-xs mx-auto"
  />
</template>
