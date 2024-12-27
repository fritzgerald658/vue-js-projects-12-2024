<template>
  <div
    class="title flex flex-row items-center gap-1 mb-0 cursor-pointer text-[14px] font-bold"
    @click="toggleSettingsDropdown('contentDropdown')"
  >
    <div class="icon" v-if="dropdowns.contentDropdown">
      <Chevdown />
    </div>
    <div class="icon" v-else><ChevRight /></div>
    Content
  </div>
  <!--Inside Text-->
  <div
    class="content-settings ml-7 pb-4 flex flex-col gap-2"
    v-if="dropdowns.contentDropdown"
  >
    <Textbox
      textboxType="text"
      label="Inside Text"
      labelClass="text-[12px]"
      textboxClass="input input-bordered input-xs w-full max-w-xs"
      v-model="insideText"
      @input="updatedInsideText"
      textboxPlaceholder="Type here"
    />
    <Textbox
      textboxType="color"
      label="Font Color"
      labelClass="text-[12px]"
      textboxClass="p-1 h-8 w-14 block bg-neutral cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
      v-model="fontColor"
      @input="updatedFontColor"
      textboxPlaceholder="Type here"
    />
    <!--Font Size-->
    <Textbox
      textboxType="number"
      label="Font Size (px)"
      labelClass="text-[12px]"
      textboxClass="input input-bordered input-xs w-full max-w-xs"
      v-model="fontSize"
      @input="updatedfontSize"
      rangeMax="100"
      rangeMin="12"
      textboxPlaceholder="Type here"
    />
    <!--Font Weight-->
    <Select
      label="Font Weight "
      labelClass="text-[12px]"
      selectClass="select select-bordered select-xs text-[12px] mr-2 my-2"
      v-model="fontWeight"
      @change="updatedFontWeight"
      :options="[
        { value: '100', text: 'Thin' },
        { value: '200', text: 'Extra Light' },
        { value: '300', text: 'Light' },
        { value: '400', text: 'Normal' },
        { value: '500', text: 'Medium' },
        { value: '600', text: 'Semi Bold' },
        { value: '700', text: 'Bold' },
        { value: '800', text: 'Extra Bold' },
        { value: '900', text: 'Black' },
      ]"
    />
  </div>
</template>
<script setup>
import Textbox from "../Textbox.vue";
import Select from "../Select.vue";
import { ref } from "vue";
import {
  dropdowns,
  toggleSettingsDropdown,
} from "@/assets/js/toggleSettingsDropdown";
import ChevRight from "../ChevRight.vue";
import Chevdown from "../Chevdown.vue";

const insideText = ref("");
const fontSize = ref();
const fontWeight = ref(400);
const fontColor = ref("");

// emit
const emit = defineEmits();
const updatedInsideText = () => {
  emit("updateInsideText", insideText.value);
};
const updatedfontSize = () => {
  emit("updateFontSize", fontSize.value);
};
const updatedFontWeight = () => {
  emit("updateFontWeight", fontWeight.value);
};
const updatedFontColor = () => {
  emit("updateFontColor", fontColor.value);
};
</script>
