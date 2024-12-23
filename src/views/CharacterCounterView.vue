<template>
  <div class="text-center mt-5">
    <input
      class="input input-bordered input-sm w-full max-w-xs"
      type="text"
      v-model="inputText"
      :maxlength="maxChars"
    />
    <p class="mt-2 text-[12px]" v-if="charRemaining <= 0">{{ warning }}</p>
    <p v-else class="mt-2 text-[12px]">
      Remaining Characters: {{ charRemaining }}
    </p>
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";
const maxChars = 50;
const limitReached = ref(false);
const inputText = ref("");
const charCount = computed(() => inputText.value.length);
const warning = ref("");
const charRemaining = computed(() => maxChars - charCount.value);
watch(charCount, (newVal) => {
  if (newVal === maxChars) {
    warning.value = "Limit Reached";
  } else if (newVal > maxChars) {
    inputText.value = inputText.value.length.slice(0, maxChars);
  } else {
    warning.value = "";
  }
});
</script>
<style></style>
