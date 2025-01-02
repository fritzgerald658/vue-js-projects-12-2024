<script setup></script>
<template data-theme="dracula">
  <nav class="mb-[2rem]">
    <RouterLink to="/">Quote Generator</RouterLink>
    <RouterLink to="/crypto">Crypto</RouterLink>
    <RouterLink to="/crypto_news">Crypto News</RouterLink>
    <RouterLink to="/character_counter">Character Counter</RouterLink>
    <RouterLink to="/playground">Playground</RouterLink>
    <RouterLink to="/find_recipe">Find Recipe</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
