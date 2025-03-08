<template>
  <div class="bg-zinc-950 text-white p-[40px]">
    <h1 class="text-6xl">Welcome to Nuxt + Sanity CMS</h1>
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[40px] pb-[20px] gap-[20px]"
    >
      <div
        v-for="post in posts"
        :key="post._id"
        class="w-full rounded-md shadow-2xl bg-white overflow-hidden"
      >
        <NuxtLink
          prefetch
          :to="`/posts/${post.slug.current}`"
          class="w-full flex flex-col gap-[20px] p-4"
        >
          <div class="relative w-full h-[300px]">
            <!-- Blurred placeholder -->
            <img
              v-if="post.mainImage"
              :src="urlForPlaceholder(post.mainImage).url()"
              class="absolute inset-0 w-full h-full object-cover"
              :alt="post.title"
            />
          </div>

          <div class="w-full flex flex-col">
            <h1 class="text-zinc-950 text-2xl">{{ post.title }}</h1>
            <p class="text-zinc-950 text-lg">{{ post.slug.current }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Laureana App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});

import { type Post } from "~/types/post";
import { urlFor, urlForPlaceholder } from "~/utils/sanityImage";

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(query);

const loadedImages = ref<Record<string, boolean>>({});

const handleImageLoad = (id: string) => {
  loadedImages.value[id] = true;
};
</script>
