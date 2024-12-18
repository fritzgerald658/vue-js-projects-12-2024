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
<template data-theme="dracula">
  <input
    v-model="searchQuery"
    type="text"
    placeholder="Type here"
    class="input input-bordered input-md w-full max-w-xs mx-auto"
  />
  <ul v-if="searchQuery" class="cursor-pointer">
    <li
      @click="selectSymbol(symbol)"
      v-for="(symbol, index) in filteredSearch"
      :key="index"
    >
      {{ symbol }}
    </li>
  </ul>
  <div v-if="loading">
    <span class="loading loading-spinner loading-md"></span>
  </div>
  <div v-else>
    <div v-if="symbol" class="mx-auto">
      <h2>Selected Symbol: {{ symbol }}</h2>
      <h2 v-if="price">Current Price: ${{ price }}</h2>
      <!-- Show the selected symbol -->
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
