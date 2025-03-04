<script setup lang="ts">
useHead({
  title: "Laureana App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <div class="bg-zinc-950 text-white h-[100vh]">
    Welcome to Nuxt + Sanity CMS
    <ul>
      <li><NuxtLink to="/posts">Posts</NuxtLink></li>
    </ul>
  </div>
  <div class="bg-rose-300 h-[100vh]">Hola</div>
  <div class="bg-rose-800 h-[100vh]">
    <ul>
      <li><NuxtLink to="/posts">Posts</NuxtLink></li>
    </ul>
  </div>
</template>
