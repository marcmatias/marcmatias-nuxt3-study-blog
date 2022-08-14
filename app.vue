<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  titleTemplate: (title: string) => `${title ? title + " - " : ""} Marcmatias blog`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      property: "og:url",
      content: computed(() => `https://marcmatias.github.io${route.path}`),
    },
    {
      property: "og:type",
      content: computed(() => route.meta.ogType || "website"),
    },
  ],
});

</script>
