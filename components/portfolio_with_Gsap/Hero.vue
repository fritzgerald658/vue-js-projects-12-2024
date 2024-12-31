<template>
  <div class="hero-container flex items-center justify-center h-[50vh]">
    <div class="title text-center" v-circle-cursor>
      <h1 class="font-heading text-[5rem]" ref="title">
        Fritz Gerald Castillo
      </h1>
      <Button content="SEE MORE " />
    </div>
  </div>
</template>
<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
import Button from "./Button.vue";

onMounted(() => {
  slideUp();
});

const slideUp = () => {
  gsap.from(".title", {
    y: 500,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
  });
};
</script>
