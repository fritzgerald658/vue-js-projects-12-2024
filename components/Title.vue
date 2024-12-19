<script setup>
defineProps(["title", "some"]);
</script>
<template>
  <h1>{{ title }}</h1>
  <input type="text" v-model="searchQuery" />
</template>
