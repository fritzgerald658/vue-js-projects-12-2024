<!--Dimension Settings-->
<template>
  <div
    class="title flex flex-row gap-1 mb-0 cursor-pointer text-[14px] font-bold"
    @click="toggleSettingsDropdown('dimensionDropdown')"
  >
    <div class="icon" v-if="dropdowns.dimensionDropdown"><Chevdown /></div>
    <div class="icon" v-else><ChevRight /></div>
    Dimension
  </div>
  <div
    class="dimension-settings ml-7 pb-4 flex flex-col gap-2"
    v-if="dropdowns.dimensionDropdown"
  >
    <!--Height-->
    <Textbox
      textboxType="number"
      label="Square Height (rem)"
      labelClass="text-[12px]"
      textboxClass="input input-bordered input-xs w-full max-w-xs"
      v-model="squareHeight"
      @input="updatedHeight"
      textboxPlaceholder="Type here"
    />
    <!--Width-->
    <Textbox
      textboxType="number"
      label="Square Width (rem)"
      labelClass="text-[12px]"
      textboxClass="input input-bordered input-xs w-full max-w-xs"
      v-model="squareWidth"
      @input="updatedWidth"
      textboxPlaceholder="Type here"
    />
  </div>
</template>
<script setup>
import Textbox from "../Textbox.vue";
import { ref } from "vue";
import {
  dropdowns,
  toggleSettingsDropdown,
} from "@/assets/js/toggleSettingsDropdown";
import ChevRight from "../ChevRight.vue";
import Chevdown from "../Chevdown.vue";

// square width and height
const squareWidth = ref();
const squareHeight = ref();

// emit updated width and height
const emit = defineEmits();
const updatedWidth = () => {
  emit("updateWidth", squareWidth.value);
};
const updatedHeight = () => {
  emit("updateHeight", squareHeight.value);
};
</script>
