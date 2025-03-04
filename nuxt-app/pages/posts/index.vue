<script setup lang="ts">
useHead({
  title: "Laureana App - Posts",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
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
  <NuxtLink to="/">Home</NuxtLink>
</template>
