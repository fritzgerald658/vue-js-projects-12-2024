<template>
  <div
    class="title flex flex-row gap-1 mb-0 cursor-pointer text-[14px] font-bold"
    @click="toggleSettingsDropdown('animationDropdown')"
  >
    <div class="icon" v-if="dropdowns.animationDropdown">
      <Chevdown />
    </div>
    <div class="icon" v-else><ChevRight /></div>
    Animation
  </div>
  <div
    class="animation-settings ml-7 pb-4 flex flex-col gap-2"
    v-if="dropdowns.animationDropdown"
  >
    <Select
      label="Select Animation "
      labelClass="text-[12px]"
      selectClass="select select-bordered select-xs text-[12px] mr-2 my-2"
      v-model="selectedAnimation"
      :options="[
        { value: 'rotate', text: 'Rotate' },
        { value: 'scale', text: 'Scale' },
        { value: 'bounce', text: 'Bounce' },
        { value: 'fade', text: 'Fade' },
      ]"
    />
    <Textbox
      textboxType="range"
      label="Animation Duration (s)"
      labelClass="text-[12px]"
      textboxClass="range range-xs"
      v-model="animationDuration"
    />
    <span class="text-[12px]">{{ animationDuration }} s</span>
  </div>
</template>

<script setup>
import { nextTick, onMounted, watch } from "vue";
import { gsap } from "gsap";
import Textbox from "../Textbox.vue";
import Select from "../Select.vue";
import { ref } from "vue";
import {
  dropdowns,
  toggleSettingsDropdown,
} from "@/assets/js/toggleSettingsDropdown";
import ChevRight from "../ChevRight.vue";
import Chevdown from "../Chevdown.vue";

const animationDuration = ref(2);
const selectedAnimation = ref("");
const startAnimation = ref(false);

const props = defineProps({
  square: Object,
});

// watch for changes to selected animation and duration
watch([animationDuration, selectedAnimation], () => {
  handleChanged();
});

onMounted(async () => {
  await nextTick();
  console.log("GSAP Target at animation start:", props.square);
});

// handle animation
const handleChanged = () => {
  console.log("test");
  gsap.killTweensOf(props.square);
  startAnimation.value = true;
  applyAnimations();
};

// Object holding animation property values for different animation types
const animationProps = {
  rotate: 360,
  scale: 1.5,
  y: -100,
  opacity: 0,
};

// Function for applying animations
const applyAnimations = () => {
  switch (selectedAnimation.value) {
    case "rotate":
      rotateAnimation();
      break;
    case "scale":
      scaleAnimation();
      break;
    case "bounce":
      bounceAnimation();
    case "fade":
      fadeAnimation();
      break;
  }
};

// define animation function for each types
const rotateAnimation = () => {
  gsap.to(props.square, {
    rotation: animationProps.rotate,
    duration: animationDuration.value,
    ease: "power2.inOut",
    onComplete: () =>
      gsap.set(props.square, {
        rotation: 0,
        duration: 2,
        ease: "power2.inOut",
      }),
  });
};

const scaleAnimation = () => {
  gsap.to(props.square, {
    scale: animationProps.scale,
    duration: animationDuration.value,
    ease: "elastic",
    onComplete: () =>
      gsap.set(props.square, {
        scale: 1,
        duration: 2,
        ease: "elastic",
      }),
  });
};

const bounceAnimation = () => {
  gsap.to(props.square, {
    y: animationProps.y,
    duration: animationDuration.value,
    ease: "back",
    onComplete: () =>
      gsap.set(props.square, { y: 0, duration: 1, ease: "back" }),
  });
};

const fadeAnimation = () => {
  gsap.to(props.square, {
    opacity: animationProps.opacity, // Fade out to 0 (fully transparent)
    duration: animationDuration.value, // Duration of the fade
    ease: "power1.inOut", // Ease function for smooth transition
    onComplete: () => {
      // Optionally, reset opacity after fading out
      gsap.set(props.square, {
        opacity: 1,
        duration: 2, // Duration of the fade
        ease: "power1.inOut",
      });
    },
  });
};
</script>
