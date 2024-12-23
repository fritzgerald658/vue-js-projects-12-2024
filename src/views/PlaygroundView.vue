<template>
  <div class="flex flex-row">
    <div class="w-[18rem] bg-neutral h-[95vh] p-6">
      <input
        class="input input-bordered input-sm w-full max-w-xs mt-5"
        type="number"
        placeholder="Square Width"
        v-model="squareWidth"
      />
      <br />
      <input
        class="input input-bordered input-sm w-full max-w-xs mt-5"
        type="number"
        placeholder="Square Height"
        v-model="squareHeight"
      /><input
        class="input input-bordered input-sm w-full max-w-xs mt-5"
        type="number"
        placeholder="Border Radius"
        v-model="bRadius"
      />
      <input
        class="input input-bordered input-sm w-full max-w-xs mt-5"
        type="text"
        placeholder="Background color"
        v-model="bgColor"
      />
      <input
        class="input input-bordered input-sm w-full max-w-xs mt-5"
        type="text"
        placeholder="Inside Text"
        v-model="insideText"
      />
    </div>
    <div
      class="editable-element flex justify-center items-center mt-9 w-full h-[80vh]"
    >
      <div
        class="square bg-black flex justify-center items-center"
        :style="squareStyle"
      >
        <p v-if="insideText">{{ insideText }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";

const squareWidth = ref(0); // default value
const squareHeight = ref(0); // default value
const bgColor = ref("");
const insideText = ref("");
const bRadius = ref("");

const squareStyle = computed(() => ({
  width: `${squareWidth.value}rem`,
  height: `${squareHeight.value}rem`,
  "background-color": `${bgColor.value}`,
  "border-radius": `${bRadius.value}px`,
}));
</script>
<style>
.square {
  transition: 0.3s;
}
</style>
