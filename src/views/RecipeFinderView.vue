<template>
  <div>
    <input type="text" v-model="ingredients" />
  </div>
</template>
<script setup>
import { fetchRecipeApi } from "@/assets/js/fetchRecipeApi";
import { onMounted, ref } from "vue";

const ingredients = ref("");

onMounted(() => {
  fetchRecipeApi(ingredients);
});
</script>
