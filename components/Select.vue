<script setup>
const model = defineModel();
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  selectClass: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="settings-container">
    <label for="" :class="props.labelClass">{{ label }}</label>
    <select v-model="model" :class="props.selectClass" name="" id="">
      <option value="" disabled selected>Select</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
