<template>
  <div class="post-tags">
    <NuxtLink
      class="post-tags__link"
      v-for="(tag, i) in post.tags"
      :key="i"
      :to="`/tag/${tag}`"
    >
      <span>#</span> {{ tag }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
  display: flex;

  &__link {
    margin-right: 0.7em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor !important; //Todo: remove important;
    padding: 0.5em;
    border-radius: var(--radius);
  }
}
</style>
