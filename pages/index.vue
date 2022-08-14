<template>
  <NuxtLayout :show-logo="false">
    <Author />
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="(post, i) of posts" :key="i" :post="post" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const { data: posts } = await useAsyncData("articles", () =>
  queryContent("blog").without('coverImage').sort({ date: -1 }).find()
);
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    // Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 0.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  &_copyleft {
    display: inline-block;
    transform: scale(-1, 1);
  }

  > span {
    margin: 0 0.35em;
  }
}

.pager {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  &__link {
    color: var(--link-color);
    text-align: center;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover:not(.active) {
      background-color: var(--bg-content-color);
      border-radius: 5px;
      color: var(--link-color);
    }
  }
}

.active {
  background-color: var(--bg-content-color);
  border-radius: 5px;
}
</style>
