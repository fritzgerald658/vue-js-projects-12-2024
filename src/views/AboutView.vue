<script setup>
import { computed, onMounted, ref } from "vue";

const symbol = ref("");
const price = ref("");
const allCryptoSymbol = ref([]);
const loading = ref(false);

const fetchCryptoPrice = async () => {
  loading.value = true;
  try {
    const apiKey = "yuyuXGfelYss1OQsRfKg7A==4kJsjhCl0ZaJaqo3";
    const url = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol.value}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    const datas = await response.json();
    price.value = parseFloat(datas.price).valueOf();

    console.log(price.value);
  } catch {
  } finally {
    loading.value = false; // stop loading
  }
};

const fetchCryptoSymbols = async () => {
  try {
    const apiKey = "yuyuXGfelYss1OQsRfKg7A==4kJsjhCl0ZaJaqo3";
    const url = "https://api.api-ninjas.com/v1/cryptosymbols";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    allCryptoSymbol.value = data.symbols;
  } catch (error) {}
};

const searchQuery = ref("");
const filteredSearch = computed(() => {
  return allCryptoSymbol.value.filter((symbol) => {
    return symbol.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const selectSymbol = (selectedSymbol) => {
  symbol.value = selectedSymbol;
  fetchCryptoPrice();
  searchQuery.value = "";
};

onMounted(() => {
  fetchCryptoSymbols();
});
</script>
<template>
  <div class="main-container flex flex-row mt-5">
    <!---Left -->
    <div
      class="searchbar flex flex-col self-start justify-center border-red-50 w-[500px]"
    >
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search here"
        class="bg-neutral border-none input input-bordered input-sm w-full max-w-xs mx-auto"
      />
      <ul
        v-if="searchQuery"
        class="cursor-pointer mt-5 w-[315px] h-[325px] overflow-scroll mx-auto"
      >
        <li
          class="text-start px-2"
          @click="selectSymbol(symbol)"
          v-for="(symbol, index) in filteredSearch"
          :key="index"
        >
          {{ symbol }}
        </li>
      </ul>
    </div>

    <!---Right-->
    <div class="prices w-[500px]">
      <div v-if="loading">
        <span class="loading loading-dots loading-md"></span>
      </div>
      <div v-else>
        <div v-if="symbol" class="mx-auto">
          <h2 class="font-sans text-[2rem] text-primary font-bold">
            {{ symbol }}
          </h2>
          <h2 v-if="price">${{ price }}</h2>
          <!-- Show the selected symbol -->
        </div>
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
