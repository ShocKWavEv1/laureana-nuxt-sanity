<script setup lang="ts">
useHead({
  title: "Laureana App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});

import { type Post } from "~/types/post";

const query = groq`*[ _type == "post"] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(query);
</script>

<template>
  <div class="bg-zinc-950 text-white h-[100vh] p-[20px]">
    Welcome to Nuxt + Sanity CMS
    <div v-for="post in posts" :key="post._id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.slug.current }}</p>
    </div>
  </div>
  <div class="bg-rose-300 h-[100vh]">Hola</div>
  <div class="bg-rose-800 h-[100vh]">
    <ul>
      <li><NuxtLink to="/posts">Posts</NuxtLink></li>
    </ul>
  </div>
</template>
