<script setup>
const model = defineModel();
const props = defineProps({
  textboxClass: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  textboxPlaceholder: {
    type: String,
    default: "",
  },
  textboxType: {
    type: String,
    default: "",
  },
  rangeMin: {
    type: Number,
    default: 0,
  },
  rangeMax: {
    type: Number,
    default: 5,
  },
});
</script>

<template>
  <div class="settings-container my-3">
    <label for="" :class="props.labelClass">{{ label }}</label
    ><span></span>
    <input
      :class="props.textboxClass"
      :type="props.textboxType"
      :min="props.rangeMin"
      :max="props.rangeMax"
      :placeholder="props.textboxPlaceholder"
      v-model="model"
    />
  </div>
</template>
