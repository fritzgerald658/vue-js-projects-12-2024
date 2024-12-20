<script setup>
import getCryptoSymbols from "@/assets/js/getCryptoSymbol.js";
import getCryptoPrice from "@/assets/js/getCryptoPrice.js";
import getTopCoinPrices from "@/assets/js/getTopCoinPrices.js";
import getCryptoNews from "@/assets/js/getCryptoNews.js";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import SearchTextbox from "../../components/SearchTextbox.vue";
import Loader from "../../components/Loader.vue";

const topCoin = ref(["BTCUSDT", "ETHUSDT", "XRPUSDT"]);
const topCoinPrice = ref([""]);

const cryptoSymbol = ref("");
const price = ref("");
const allCryptoSymbol = ref([]);
const loading = ref(false);
const topCoinloading = ref(false);

// responsible for search of symbols in search bar0
const searchQuery = ref("");
const filteredSearch = computed(() => {
  return allCryptoSymbol.value.filter((symbol) => {
    return symbol.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

// responsible for displaying the symbol and the price
const selectSymbol = async (selectedSymbol) => {
  searchQuery.value = "";
  cryptoSymbol.value = selectedSymbol; //
  await getCryptoPrice(cryptoSymbol, price, loading); // display the crypto price
};

onBeforeMount(async () => {
  await getTopCoinPrices(topCoin, topCoinPrice, topCoinloading);
});

// get crypto symbols
onMounted(async () => {
  allCryptoSymbol.value = await getCryptoSymbols(); // assign fetched crypto symbol to a reactive array
});
</script>
<template>
  <!-- Search bar container-->
  <div
    class="searchbar-container w-full relative p-7 pb-0 flex flex-row items-center justify-center"
  >
    <SearchTextbox
      v-model:search-query="searchQuery"
      placeholder="Search here: e.g. BTCUSDT"
      class="bg-neutral border-none input input-bordered input-sm w-full max-w-xs mx-auto"
    />
    <ul
      v-if="searchQuery"
      class="absolute z-50 top-7 w-[20.3rem] max-h-[18rem] rounded-lg mt-10 p-2 bg-neutral overflow-y-auto"
    >
      <li
        class="text-start text-white px-2 my-[5px] text-[14px]"
        @click="selectSymbol(symbol)"
        v-for="(symbol, index) in filteredSearch"
        :key="index"
      >
        {{ symbol }}
      </li>
    </ul>
  </div>
  <!-- Searched Coin -->
  <div
    class="main-container flex flex-row justify-center w-full gap-[5rem] mt-5 px-[2rem]"
  >
    <div class="prices text-left">
      <div v-if="loading">
        <Loader class="loading loading-spinner loading-lg" />
      </div>
      <div v-else>
        <div v-if="cryptoSymbol" class="mx-auto text-center">
          <h2 class="font-sans text-[2rem] text-accent font-bold">
            {{ cryptoSymbol }}
          </h2>
          <h2 v-if="price">${{ price }}</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- Top Coin -->
  <h1 class="text-center mt-10 font-extrabold text-[2rem]">Top Coins</h1>
  <!-- Title-->
  <div
    class="top-coins-container mt-1 flex flex-col items-center md:flex-row justify-center gap-[0.1rem] md:gap-[1rem]"
  >
    <div v-if="topCoinloading">
      <Loader class="loading loading-spinner loading-lg" />
    </div>
    <div
      v-else
      class="top-coin-container px-4 py-4 border-[1px] border-neutral rounded-[1rem] w-[20rem] mt-5"
      v-for="(coinPrice, index) in topCoinPrice"
      :key="index"
    >
      <div>
        <p class="font-bold text-[1.2rem] text-accent">
          {{ coinPrice.symbol }}
        </p>
        <p>$ {{ coinPrice.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
li:hover {
  text-decoration: underline;
}
li {
  cursor: pointer;
}
</style>
