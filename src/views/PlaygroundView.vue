<script setup>
import { computed, ref } from "vue";
import { gsap } from "gsap";

const square = ref(null);
const selectedAnimation = ref("");

const squareWidth = ref(0); // default value
const squareHeight = ref(0); // default value
const bgColor = ref("");
const insideText = ref("");
const bRadius = ref("0");
const bStyle = ref("");
const bColor = ref("");
const bWidth = ref("0");

const onHover = () => {
  gsap.to(square.value, {
    rotation: 360,
    duration: 2,
    ease: "power2.inOut",
    onComplete: () =>
      gsap.set(square.value, {
        rotation: 0,
        duration: 2,
        ease: "power2.inOut",
      }),
  });
};

const applyAnimations = () => {
  gsap.killTweensOf(square.value);

  switch (selectedAnimation.value) {
    case "rotate":
      gsap.to(square.value, {
        rotation: 360,
        duration: 2,
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
        duration: 2,
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
        duration: 1,
        ease: "back",
        onComplete: () =>
          gsap.set(square.value, { y: 0, duration: 1, ease: "back" }),
      });
      break;
    case "fade":
      gsap.to(square.value, {
        opacity: 0, // Fade out to 0 (fully transparent)
        duration: 2, // Duration of the fade
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
  <div class="flex flex-col md:flex-row">
    <div
      class="w-[100vw] md:w-[18rem] h-[27vh] md:h-[95vh] overflow-y-auto md:border-r-[1px] md:border-y-[1px] px-16 md:px-6 p-6 mt-5"
    >
      <h1 class="font-bold">Dimension</h1>
      <!--Width-->
      <div class="editor-container">
        <label for="" class="text-[12px]">Square Width (rem)</label>
        <input
          class="range range-xs"
          type="range"
          step="1"
          max="60"
          placeholder="Square Width"
          v-model="squareWidth"
        />
        <span class="text-[12px]">{{ squareWidth }} rem</span>
      </div>
      <br />
      <div class="editor-container">
        <!--Height-->
        <label for="" class="text-[12px]">Square Height (rem)</label>
        <input
          class="range range-xs"
          type="range"
          step="1"
          max="40"
          placeholder="Square Height"
          v-model="squareHeight"
        />
        <span class="text-[12px]">{{ squareHeight }} rem</span>
      </div>
      <br />
      <h1 class="font-bold">Border Style</h1>
      <!--Border Style-->
      <div class="editor-container my-2">
        <label for="border-style" class="text-[12px]">Border</label> <br />
        <select
          v-model="bStyle"
          class="text-[12px] border-2 select select-xs w-full max-w-xs select-bordered"
        >
          <option disabled selected>Select border style</option>
          <option value="none">None</option>
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
          <option value="inset">Inset</option>
          <option value="outset">Outset</option>
          <option value="hidden">Hidden</option>
        </select>
      </div>
      <div class="editor-container">
        <label for="border-color" class="text-[12px]">Border Color</label>
        <br />
        <input
          type="text"
          placeholder="e.g. red"
          class="input input-xs input-bordered w-full max-w-xs"
          v-model="bColor"
        />
      </div>
      <div class="editor-container my-2">
        <!--Border Width-->
        <label for="" class="text-[12px]">Border Width (px)</label>
        <input
          class="range range-xs"
          type="range"
          max="50"
          placeholder="Border Width"
          v-model="bWidth"
        /><span class="text-[12px]">{{ bWidth }} px</span>
      </div>
      <div class="editor-container my-2">
        <!--Border Radius-->
        <label for="" class="text-[12px]">Border Radius (px)</label>
        <input
          class="range range-xs"
          type="range"
          max="500"
          placeholder="Border Radius"
          v-model="bRadius"
        /><span class="text-[12px]">{{ bRadius }} px</span>
      </div>
      <br />
      <h1 class="font-bold">Background</h1>
      <div class="editor-container">
        <!--Background Color-->
        <label for="" class="text-[12px]">Color</label>
        <input
          class="text-[12px] input input-bordered input-xs w-full max-w-xs"
          type="text"
          placeholder="e.g. red or #0000"
          v-model="bgColor"
        />
      </div>
      <br />
      <h1 class="font-bold">Content</h1>
      <div class="editor-container">
        <!--Content Text-->
        <label for="" class="text-[12px]">Text</label>
        <input
          class="input input-bordered input-xs w-full max-w-xs"
          type="text"
          placeholder="Hello world"
          v-model="insideText"
        />
      </div>
      <br />
      <!--Choose animation-->
      <h1 class="font-bold">Animation</h1>
      <div class="editor-container">
        <label for="animation-select" class="text-[12px]"
          >Choose Animation:
        </label>
        <select
          id="animation-select"
          v-model="selectedAnimation"
          class="select select-bordered select-sm text-[12px] mr-2 my-2"
        >
          <option value="rotate">Rotate</option>
          <option value="scale">Scale</option>
          <option value="bounce">Bounce</option>
          <option value="fade">Fade</option>
        </select>

        <button
          class="text-[12px] btn btn-accent btn-xs"
          @click="applyAnimations()"
        >
          Animate
        </button>
      </div>
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
