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
  Hi Post Detail {{ route.params.id }}
  <NuxtLink to="/posts">Posts</NuxtLink>
</template>
