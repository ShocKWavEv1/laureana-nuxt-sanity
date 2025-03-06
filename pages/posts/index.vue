<script setup lang="ts">
useHead({
  title: "Laureana App - Posts",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<template>
  Posts Page
  <ul>
    <li><NuxtLink to="/posts/45">Posts details 45</NuxtLink></li>
    <li><NuxtLink to="/posts/89">Posts details 89</NuxtLink></li>
    <li><NuxtLink to="/posts/90">Posts details 90</NuxtLink></li>
    <li><NuxtLink to="/posts/34">Posts details 34</NuxtLink></li>
  </ul>
  <NuxtLink to="/" prefetch>Home</NuxtLink>
  <div class="w-full h-[300vh] bg-slate-950">Hola</div>
</template>
