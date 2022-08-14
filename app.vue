<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  titleTemplate: (title: string) => `${title ? title + " - " : ""} Marcmatias blog`,
});

</script>
