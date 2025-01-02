<template></template>
<script setup>
import { fetchRecipeApi } from "@/assets/js/fetchRecipeApi";
import { onMounted } from "vue";

onMounted(() => {
  fetchRecipeApi();
});
</script>
