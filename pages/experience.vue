<template>
  <NuxtLayout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ post.title }}
      </h1>
    </div>

    <div class="post content-box">
      <Author class="post-author" :show-link="false" />
      <div class="post__header">
        <img
          class="post-card__image"
          v-if="post.coverImage"
          :src="`/images/covers/${post.coverImage}`"
          :alt="post.alt"
        />
      </div>

      <ContentRenderer class="post__content" :value="post" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const path = "/author";
const { data: post } = await useAsyncData(path, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
  max-width: 58rem;
  margin: 0 auto;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    padding-bottom: 1rem;
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
  margin-bottom: calc(var(--space) / 1);
}
</style>
