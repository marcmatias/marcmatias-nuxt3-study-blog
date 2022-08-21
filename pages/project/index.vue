<template>
  <NuxtLayout>
    <h1 class="tag-title text-center space-bottom">Projetos</h1>
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="(post, i) of posts" :key="i" :post="post" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const { data: posts } = await useAsyncData("pojects", () => {
  return queryContent("project").sort({ date: -1 }).find();
});
</script>
