<template>
  <NuxtLayout>
    <h1 class="tag-title text-center space-bottom">Tag # {{ slug }}</h1>
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="(post, i) of posts" :key="i" :post="post" />
    </div>
  </NuxtLayout>
</template>

<script setup>
let slug = useRoute().params.slug.toString().replace(/,/g, "/");
slug = slug.endsWith('/') ? slug.substring(0, slug.length - 1) : slug;
const { data: posts } = await useAsyncData(slug, () => {
  return queryContent("blog")
    .where({ tags: { $contains: slug } })
    .without("coverImage")
    .find();
});
</script>