<script setup>
import { onMounted, ref } from "vue";
import getCryptoNews from "@/assets/js/getCryptoNews";

const cors = require("cors");
const newsTitle = ref([]);
const newsDesciption = ref([]);
const newsUrl = ref([]);

onMounted(async () => {
  newsTitle.value = await getCryptoNews(newsTitle, newsDesciption, newsUrl);
  console.log(newsTitle.value);
});
</script>
<template>
  <h1 class="font-bold text-[1.5rem] text-center mt-5">Crypto News</h1>
  <div class="flex flex-row gap-2 flex-wrap justify-center mt-3">
    <div
      class="flex flex-row gap-5"
      v-for="(title, index) in newsTitle"
      :key="index"
    >
      <div
        class="news-container max-w-[20rem] flex flex-col gap-2 border-[1px] m-0 p-4"
      >
        <p class="text-[0.9rem] font-bold text-accent">{{ title }}</p>
        <p class="text-[0.8rem] text-grey">{{ newsDesciption[index] }}</p>
        <a
          :href="newsUrl[index]"
          class="text-[0.7rem] underline"
          target="_blank"
          >Read more</a
        >
      </div>
    </div>
  </div>
</template>
