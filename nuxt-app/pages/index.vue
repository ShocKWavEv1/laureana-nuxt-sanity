<script setup lang="ts">
useHead({
  title: "Laureana App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});

import { type Post } from "~/types/post";

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(query);
</script>

<template>
  <div class="bg-zinc-950 text-white h-[100vh] p-[20px]">
    Welcome to Nuxt + Sanity CMS
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[20px] gap-[20px]"
    >
      <div
        v-for="post in posts"
        :key="post._id"
        class="w-full rounded-md shadow-2xl bg-white p-4"
      >
        <NuxtLink prefetch :to="`/posts/${post.slug.current}`">
          <h1 class="text-zinc-950 text-2xl">{{ post.title }}</h1>
          <p class="text-zinc-950 text-lg">{{ post.slug.current }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="bg-white text-zinc-950 h-[100vh]">Hola</div>
  <div class="bg-black text-white h-[100vh]">
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-[20px] gap-[20px]"
    >
      <div
        v-for="post in posts"
        :key="post._id"
        class="w-full rounded-md shadow-2xl bg-white p-4"
      >
        <NuxtLink prefetch :to="`/posts/${post.slug.current}`">
          <h1 class="text-zinc-950 text-2xl">{{ post.title }}</h1>
          <p class="text-zinc-950 text-lg">{{ post.slug.current }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
