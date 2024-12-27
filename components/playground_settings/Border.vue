<template>
  <div
    class="title flex flex-row gap-1 mb-0 cursor-pointer text-[14px] font-bold"
    @click="toggleSettingsDropdown('borderStyleDropdown')"
  >
    <div class="icon" v-if="dropdowns.borderStyleDropdown">
      <Chevdown />
    </div>
    <div class="icon" v-else><ChevRight /></div>
    Border Style
  </div>
  <div
    class="border-settings ml-7 pb-4 flex flex-col gap-2"
    v-if="dropdowns.borderStyleDropdown"
  >
    <!--Border Style-->
    <Select
      label="Border Style "
      labelClass="text-[12px]"
      selectClass="select select-bordered select-xs text-[12px] mr-2 "
      v-model="bStyle"
      @change="updatedbStyle"
      :options="[
        { value: 'solid', text: 'Solid' },
        { value: 'dotted', text: 'Dotted' },
        { value: 'dashed', text: 'Dashed' },
        { value: 'double', text: 'Double' },
        { value: 'groove', text: 'Groove' },
        { value: 'ridge', text: 'Ridge' },
        { value: 'inset', text: 'Inset' },
        { value: 'outset', text: 'Outset' },
        { value: 'none', text: 'None' },
        { value: 'hidden', text: 'Hidden' },
      ]"
    />
    <!--Border color-->
    <Textbox
      textboxType="color"
      label="Border Width (px)"
      labelClass="text-[12px]"
      textboxClass="p-1 h-8 w-14 block bg-neutral cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
      v-model="bColor"
      @input="updatedbColor"
    />
    <!--Border Width-->
    <Textbox
      textboxType="number"
      label="Border Width (px)"
      labelClass="text-[12px]"
      textboxClass="input input-bordered input-xs w-full max-w-xs"
      v-model="bWidth"
      @input="updatedbWidth"
      rangeMax="100"
      rangeMin="0"
      textboxPlaceholder="Type here"
    />

    <!--Border Radius-->
    <Textbox
      textboxType="number"
      label="Border Radius (px)"
      labelClass="text-[12px]"
      textboxClass="input input-bordered input-xs w-full max-w-xs"
      v-model="bRadius"
      @input="updatedbRadius"
      rangeMax="100"
      rangeMin="0"
      textboxPlaceholder="Type here"
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

const bRadius = ref();
const bStyle = ref("");
const bColor = ref("");
const bWidth = ref();

const emit = defineEmits();
const updatedbRadius = () => {
  emit("updatebRadius", bRadius.value);
};
const updatedbStyle = () => {
  emit("updatebStyle", bStyle.value);
};
const updatedbColor = () => {
  emit("updatebColor", bColor.value);
};
const updatedbWidth = () => {
  emit("updatebWidth", bWidth.value);
};
</script>
