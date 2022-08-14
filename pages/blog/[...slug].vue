<template>
  <NuxtLayout>
    <div>
      <div class="post-title">
        <h1 class="post-title__text">
          {{ post.title }}
        </h1>

        <PostMeta :post="post" />
      </div>

      <div class="post content-box">
        <div class="post__header">
          <img
            class="post-card__image"
            v-if="post.coverImage"
            :src="`/images/covers/${post.coverImage}`"
            :alt="post.alt"
          />
        </div>

        <ContentRenderer class="post__content" :value="post" />

        <div class="post__footer">
          <PostTags :post="post" />
        </div>
      </div>

      <div class="post-comments"></div>

      <Author class="post-author" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
let slug = "/blog/" + useRoute().params.slug.toString().replace(/,/g, "/");
slug = slug.endsWith('/') ? slug.substring(0, slug.length - 1) : slug;

const { data: post } = await useAsyncData(slug, () => {
  return queryContent(slug).findOne();
});

const toc = computed(() => {
  if (!post.value) return [];
  const items = post.value.excerpt?.children;
  if (!items) return [];
  const toc = [];
  const tags = ["h2", "h3", "h4", "h5", "h6"];
  items.forEach(
    (item: { tag: string; props: { id: { toString: () => string } } }) => {
      if (tags.includes(item.tag)) {
        toc.push({
          id: item.props.id,
          title: item.props.id.toString().replace(/-/g, " "),
          depth: Number(item.tag.replace(/h/g, "")),
        });
      }
    }
  );
  return toc;
});

// Set the meta
useHead({
  title: post.value.title,
  meta: [
    { name: "description", content: post.value.description },
    {
      property: "og:image",
      content: `https://marcmatias.github.io/images/covers/${post.value.coverImage}`,
    },
    {
      property: "og:title",
      content: post.value.title,
    },
    {
      property: "og:description",
      content: post.value.description,
    },
    {
      property: "twitter:image",
      content: `https://marcmatias.github.io/images/covers/${post.value.coverImage}`,
    },
    {
      property: "twitter:title",
      content: post.value.title,
    },
    {
      property: "twitter:description",
      content: post.value.description,
    },
  ],
});

definePageMeta({
  ogType: "Blog",
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

.post-comments {
  background-color: var(--bg-content-color);
  max-width: var(--content-width);
  margin: 0 auto;
  transition: background-color 0.6s;
  padding: var(--space);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
