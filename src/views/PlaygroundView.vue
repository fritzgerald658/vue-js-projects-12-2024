<script setup>
import { computed, ref } from "vue";
import { gsap } from "gsap";
import Textbox from "../../components/Textbox.vue";
import Select from "../../components/Select.vue";
import Test from "../../components/Test.vue";
import Chevdown from "../../components/Chevdown.vue";
import ChevRight from "../../components/ChevRight.vue";

const square = ref(null);
const selectedAnimation = ref("");
const startAnimation = ref(false);
const dimension = ref(false);
const borderStyle = ref(false);
const squareWidth = ref(""); // default value
const squareHeight = ref(""); // default value
const bgColor = ref("");
const insideText = ref("");
const bRadius = ref("0");
const bStyle = ref("");
const bColor = ref("");
const bWidth = ref("0");
const animationDuration = ref(2);

const test = () => {
  dimension.value = !dimension.value;
  if (dimension.value === false) {
    squareWidth.value = "";
    squareHeight.value = "";
  }
};

const handleChanged = () => {
  gsap.killTweensOf(square.value);
  startAnimation.value = true;
  applyAnimations();
};
const applyAnimations = () => {
  switch (selectedAnimation.value) {
    case "rotate":
      gsap.to(square.value, {
        rotation: 360,
        duration: animationDuration.value,
        ease: "power2.inOut",
        onComplete: () =>
          gsap.set(square.value, {
            rotation: 0,
            duration: 2,
            ease: "power2.inOut",
          }),
      });
      break;
    case "scale":
      gsap.to(square.value, {
        scale: 1.5,
        duration: animationDuration.value,
        ease: "elastic",
        onComplete: () =>
          gsap.set(square.value, {
            scale: 1,
            duration: 2,
            ease: "elastic",
          }),
      });
      break;
    case "bounce":
      gsap.to(square.value, {
        y: -100,
        duration: animationDuration.value,
        ease: "back",
        onComplete: () =>
          gsap.set(square.value, { y: 0, duration: 1, ease: "back" }),
      });
      break;
    case "fade":
      gsap.to(square.value, {
        opacity: 0, // Fade out to 0 (fully transparent)
        duration: animationDuration.value, // Duration of the fade
        ease: "power1.inOut", // Ease function for smooth transition
        onComplete: () => {
          // Optionally, reset opacity after fading out
          gsap.set(square.value, {
            opacity: 1,
            duration: 2, // Duration of the fade
            ease: "power1.inOut",
          });
        },
      });
      break;
  }
};

const squareStyle = computed(() => ({
  width: `${squareWidth.value}rem`,
  height: `${squareHeight.value}rem`,
  "background-color": `${bgColor.value}`,
  "border-style": `${bStyle.value}`,
  "border-radius": `${bRadius.value}px`,
  "border-color": `${bColor.value}`,
  "border-width": `${bWidth.value}px`,
}));
</script>
<template>
  <div class="flex flex-col md:flex-row rounded-lg bg-base-300">
    <!-- <Test /> -->
    <div
      class="w-[100vw] md:w-[18rem] h-[27vh] md:h-[95vh] overflow-y-auto bg-base-200 px-16 md:px-6 p-6 rounded-lg"
    >
      <div
        class="title flex flex-row gap-1 mb-0 cursor-pointer text-[14px] font-bold"
        @click="test"
      >
        <div class="icon" v-if="dimension"><Chevdown /></div>
        <div class="icon" v-else><ChevRight /></div>
        Dimension
      </div>
      <div class="dimension-settings mb-5" v-if="dimension">
        <!--Height-->
        <Textbox
          textboxType="number"
          label="Square Height (rem)"
          labelClass="text-[12px]"
          textboxClass="input input-bordered input-xs w-full max-w-xs"
          v-model="squareHeight"
          textboxPlaceholder="Type here"
        />
        <!--Width-->
        <Textbox
          textboxType="number"
          label="Square Width (rem)"
          labelClass="text-[12px]"
          textboxClass="input input-bordered input-xs w-full max-w-xs"
          v-model="squareWidth"
          textboxPlaceholder="Type here"
        />
      </div>

      <!-- Border style -->
      <div
        class="title flex flex-row gap-1 mb-0 cursor-pointer text-[14px] font-bold"
        @click="test"
      >
        <div class="icon" v-if="borderStyle"><Chevdown /></div>
        <div class="icon" v-else><ChevRight /></div>
        Border Style
      </div>
      <!--Border Style-->
      <Select
        label="Border Style"
        labelClass="text-[12px]"
        selectClass="select select-bordered select-sm text-[12px] mr-2 my-2"
        v-model="bStyle"
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
      /><br />
      <!--Border Width-->
      <Textbox
        label="Border Width (px)"
        labelClass="text-[12px]"
        textboxClass="input input-bordered input-xs w-full max-w-xs"
        v-model="bWidth"
        textboxPlaceholder="Type here"
      />
      <br />
      <!--Border Radius-->
      <Textbox
        textboxType="number"
        label="Border Radius (px)"
        labelClass="text-[12px]"
        textboxClass="input input-bordered input-xs w-full max-w-xs"
        v-model="bRadius"
        textboxPlaceholder="Type here"
      />
      <br />
      <h1 class="font-bold">Background</h1>
      <!--Background Color-->
      <Textbox
        textboxType="color"
        label="Color"
        labelClass="text-[12px]"
        textboxClass="p-1 h-8 w-14 block bg-neutral cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
        v-model="bgColor"
      />
      <br />
      <h1 class="font-bold">Content</h1>
      <Textbox
        textboxType="text"
        label="Text"
        labelClass="text-[12px]"
        textboxClass="input input-bordered input-xs w-full max-w-xs"
        v-model="insideText"
        textboxPlaceholder="Type here"
      />
      <br />
      <!--Choose animation-->
      <h1 class="font-bold">Animation</h1>
      <Select
        @change="handleChanged"
        label="Animation Style"
        labelClass="text-[12px]"
        selectClass="select select-bordered select-sm text-[12px] mr-2 my-2"
        v-model="selectedAnimation"
        :options="[
          { value: 'rotate', text: 'Rotate' },
          { value: 'scale', text: 'Scale' },
          { value: 'bounce', text: 'Bounce' },
          { value: 'fade', text: 'Fade' },
        ]"
      />
      <!--Animation Duration-->
      <Textbox
        textboxType="range"
        label="Animation Duration (s)"
        labelClass="text-[12px]"
        textboxClass="range range-xs"
        v-model="animationDuration"
      />
      <span>{{ animationDuration }}</span>
    </div>
    <!--Actual Square-->
    <div
      class="editable-element flex justify-center items-center mt-9 w-full h-[50%] md:h-[80vh]"
    >
      <div
        @mouseover="onHover"
        ref="square"
        class="square bg-black flex justify-center items-center"
        :style="squareStyle"
      >
        <p v-if="insideText">{{ insideText }}</p>
      </div>
      <br />
    </div>
  </div>
</template>

<style scoped>
.square {
  transition: 0.6s;
}
</style>
