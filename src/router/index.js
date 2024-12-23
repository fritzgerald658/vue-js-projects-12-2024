import { createRouter, createWebHistory } from "vue-router";
import QuoteGenerator from "../views/QuoteGeneratorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quote-generator",
      component: QuoteGenerator,
    },
    {
      path: "/crypto",
      name: "crypto",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CryptoView.vue"),
    },
    {
      path: "/crypto_news",
      name: "crypto_news",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CryptoNews.vue"),
    },
    {
      path: "/character_counter",
      name: "character_counter",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CharacterCounterView.vue"),
    },
  ],
});

export default router;
