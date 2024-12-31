<template>
  <div
    class="title flex flex-row items-center gap-1 mb-0 cursor-pointer text-[14px] font-bold"
    @click="toggleSettingsDropdown('backgroundDropdown')"
  >
    <div class="icon" v-if="dropdowns.backgroundDropdown">
      <Chevdown />
    </div>
    <div class="icon" v-else><ChevRight /></div>
    Background
  </div>
  <!--Background Color-->
  <div
    class="background-settings ml-7 pb-4 flex flex-col gap-2"
    v-if="dropdowns.backgroundDropdown"
  >
    <Textbox
      textboxType="color"
      label="Background Color"
      labelClass="text-[12px]"
      textboxClass="p-1 h-8 w-14 block bg-neutral cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
      v-model="bgColor"
      @input="updatedBgColor"
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

const bgColor = ref("");

const emit = defineEmits();
const updatedBgColor = () => {
  emit("updateBgColor", bgColor.value);
};
</script>
