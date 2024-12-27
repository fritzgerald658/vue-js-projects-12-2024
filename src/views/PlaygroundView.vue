<script setup>
import { onMounted } from "vue";
import { computed, ref } from "vue";
import Dimension from "../../components/playground_settings/Dimension.vue";
import Border from "../../components/playground_settings/Border.vue";
import Background from "../../components/playground_settings/Background.vue";
import Content from "../../components/playground_settings/Content.vue";
import Animation from "../../components/playground_settings/Animation.vue";

// dom element ref
const square = ref(null);

// dimension var
const squareWidth = ref(5); // default value
const squareHeight = ref(5); // default value

// background var
const bgColor = ref("");

// content var
const insideText = ref("");
const fontSize = ref(12);
const fontWeight = ref(400);
const fontColor = ref("");

// border var
const bRadius = ref("0");
const bStyle = ref("");
const bColor = ref("");
const bWidth = ref("0");

const squareStyle = computed(() => ({
  width: `${squareWidth.value}rem`,
  height: `${squareHeight.value}rem`,
  "background-color": `${bgColor.value}`,
  "border-style": `${bStyle.value}`,
  "border-radius": `${bRadius.value}px`,
  "border-color": `${bColor.value}`,
  "border-width": `${bWidth.value}px`,
  "font-size": `${fontSize.value}px`,
  "font-weight": `${fontWeight.value}`,
  color: `${fontColor.value}`,
}));

onMounted(() => {
  console.log("Square in parent:", square.value); // Should log the DOM element (or null if not bound)
});
</script>
<template>
  <div class="flex flex-col md:flex-row rounded-lg bg-base-300">
    <!-- <Test /> -->
    <div
      class="w-[100vw] md:w-[18rem] h-[27vh] md:h-[95vh] overflow-y-auto bg-base-200 px-16 md:px-6 p-6 rounded-lg"
    >
      <!--Dimension-->
      <Dimension
        @updateHeight="squareHeight = $event"
        @updateWidth="squareWidth = $event"
      />
      <!--Border-->
      <Border
        @updatebRadius="bRadius = $event"
        @updatebStyle="bStyle = $event"
        @updatebColor="bColor = $event"
        @updatebWidth="bWidth = $event"
      />
      <!--Background-->
      <Background @updateBgColor="bgColor = $event" />

      <!--Content-->
      <Content
        @updateInsideText="insideText = $event"
        @updateFontSize="fontSize = $event"
        @updateFontWeight="fontWeight = $event"
        @updateFontColor="fontColor = $event"
      />

      <!--Choose animation-->
      <Animation :square="square" />
    </div>

    <!--Actual Square-->
    <div
      class="editable-element flex justify-center items-center mt-9 w-full h-[50%] md:h-[80vh]"
    >
      <div
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
