<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const pageTitle = computed(() => `Laureana App - ${route.params.id}`);

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<template>
  <div class="w-full h-[300vh] bg-teal-500">
    Hi Post Detail {{ route.params.id }}
    <NuxtLink to="/posts">Posts</NuxtLink>
  </div>
</template>
