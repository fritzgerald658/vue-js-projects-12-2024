<script setup>
import AddToFav from "../../components/AddToFav.vue";
import { onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from "vue";

const quote = ref("");
const quoteAuthor = ref("");
const errorMessage = ref("");
const quoteCategory = ref("");
const loading = ref(false);

// function for generating random quote via clicking a button
const fetchRandomQuote = async () => {
  loading.value = true;
  try {
    const apiKey = "yuyuXGfelYss1OQsRfKg7A==4kJsjhCl0ZaJaqo3";
    const url = "https://api.api-ninjas.com/v1/quotes";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    const datas = await response.json();
    quote.value = datas[0].quote;
    quoteAuthor.value = datas[0].author;
  } catch {
    errorMessage.value = error.message;
  } finally {
    loading.value = false; // stop loading
  }
};

// displays a quote when the page is reloaded
onBeforeMount(() => {
  fetchRandomQuote();
});

// fucntion for generating a quote base on a selected category
const fetchQuote = async () => {
  loading.value = true;
  try {
    const apiKey = "yuyuXGfelYss1OQsRfKg7A==4kJsjhCl0ZaJaqo3";
    const url = `https://api.api-ninjas.com/v1/quotes?category=${quoteCategory.value}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    const datas = await response.json();
    quote.value = datas[0].quote;
    quoteAuthor.value = datas[0].author;
  } catch {
    errorMessage.value = error.message;
  } finally {
    loading.value = false; // stop loading
  }
};

// this will run the function for generating a quote base on a selected cateqory
watch(quoteCategory, (newVal) => {
  if (newVal) {
    fetchQuote();
  }
});
</script>

<template>
  <div class="mx-auto flex flex-col">
    <select
      v-model="quoteCategory"
      class="select select-bordered select-sm w-full max-w-xs mx-auto mt-6"
    >
      <option disabled selected>Choose Quote Category</option>
      <option value="age">Age</option>
      <option value="alone">Alone</option>
      <option value="amazing">Amazing</option>
      <option value="anger">Anger</option>
      <option value="architecture">Architecture</option>
      <option value="art">Art</option>
      <option value="attitude">Attitude</option>
      <option value="beauty">Beauty</option>
      <option value="best">Best</option>
      <option value="birthday">Birthday</option>
      <option value="business">Business</option>
      <option value="car">Car</option>
      <option value="change">Change</option>
      <option value="communication">Communication</option>
      <option value="computers">Computers</option>
      <option value="cool">Cool</option>
      <option value="courage">Courage</option>
      <option value="dad">Dad</option>
      <option value="dating">Dating</option>
      <option value="death">Death</option>
      <option value="design">Design</option>
      <option value="dreams">Dreams</option>
      <option value="education">Education</option>
      <option value="environmental">Environmental</option>
      <option value="equality">Equality</option>
      <option value="experience">Experience</option>
      <option value="failure">Failure</option>
      <option value="faith">Faith</option>
      <option value="family">Family</option>
      <option value="famous">Famous</option>
      <option value="fear">Fear</option>
      <option value="fitness">Fitness</option>
      <option value="food">Food</option>
      <option value="forgiveness">Forgiveness</option>
      <option value="freedom">Freedom</option>
      <option value="friendship">Friendship</option>
      <option value="funny">Funny</option>
      <option value="future">Future</option>
      <option value="god">God</option>
      <option value="good">Good</option>
      <option value="government">Government</option>
      <option value="graduation">Graduation</option>
      <option value="great">Great</option>
      <option value="happiness">Happiness</option>
      <option value="health">Health</option>
      <option value="history">History</option>
      <option value="home">Home</option>
      <option value="hope">Hope</option>
      <option value="humor">Humor</option>
      <option value="imagination">Imagination</option>
      <option value="inspirational">Inspirational</option>
      <option value="intelligence">Intelligence</option>
      <option value="jealousy">Jealousy</option>
      <option value="knowledge">Knowledge</option>
      <option value="leadership">Leadership</option>
      <option value="learning">Learning</option>
      <option value="legal">Legal</option>
      <option value="life">Life</option>
      <option value="love">Love</option>
      <option value="marriage">Marriage</option>
      <option value="medical">Medical</option>
      <option value="men">Men</option>
      <option value="mom">Mom</option>
      <option value="money">Money</option>
      <option value="morning">Morning</option>
      <option value="movies">Movies</option>
      <option value="success">Success</option>
    </select>
    <button
      @click="fetchRandomQuote"
      class="btn btn-xs btn-active btn-primary mx-auto mt-6 text-white"
    >
      Generate Random Quote
    </button>
    <div class="text-center flex flex-col items-center justify-center mt-6">
      <div class="lg:w-[50vw] px-5">
        <div v-if="loading">
          <span class="loading loading-ring loading-lg"></span>
        </div>
        <div v-else>
          <p>{{ errorMessage }}</p>
          <p>{{ quote }}</p>
          <p v-if="quoteAuthor">-- {{ quoteAuthor }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
