<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-[100vw] md:w-[18rem] bg-neutral p-6 mt-5">
      <input
        class="input input-bordered input-xs md:input-sm w-full max-w-xs"
        type="number"
        placeholder="Square Width"
        v-model="squareWidth"
      />
      <br />
      <input
        class="input input-bordered input-xs md:input-sm w-full max-w-xs mt-5"
        type="number"
        placeholder="Square Height"
        v-model="squareHeight"
      />
      <br />
      <input
        class="input input-bordered input-xs md:input-sm w-full max-w-xs mt-5"
        type="number"
        placeholder="Border Radius"
        v-model="bRadius"
      />
      <br />
      <input
        class="input input-bordered input-xs md:input-sm w-full max-w-xs mt-5"
        type="text"
        placeholder="Background color"
        v-model="bgColor"
      /><br />
      <input
        class="input input-bordered input-xs md:input-sm w-full max-w-xs mt-5"
        type="text"
        placeholder="Inside Text"
        v-model="insideText"
      /><br />
    </div>
    <div
      class="editable-element flex justify-center items-center mt-9 w-full h-[50%] md:h-[80vh]"
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
