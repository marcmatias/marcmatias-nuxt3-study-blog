<template>
  <NuxtLayout>
    <h1 class="text-center">Pesquisar</h1>
    <div class="text-center">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Buscar por palavras no título"
        class="search-input"
        v-model="search"
      />
    </div>
    <!-- List posts -->
    <div class="posts" v-if="posts.length > 0">
      <PostCard v-for="(post, i) of posts" :key="i" :post="post" />
    </div>
    <div id="message" class="message text-center" v-else>
      <span>Nenhum resultado para essa pesquisa</span>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      search: "",
      posts: [],
    };
  },
  methods: {
    async handleSearch(search = "") {
      // Figure out how to make queries/search case insensitive
      const queryResult = await queryContent("blog")
        .where({ title: { $contains: search } })
        .without("coverImage")
        .sort({ date: -1 })
        .find();

      this.posts = queryResult;
    },
  },
  watch: {
    async search(search: any) {
      this.handleSearch(search);
    },
  },
  mounted() {
    this.handleSearch();
  },
};
</script>

<style lang="scss">
.search-input {
  padding: 0.5rem;
  margin: 1rem 0.5rem 3rem;
  width: 350px;
}
.message {
    border: 2px dashed rgba(128, 128, 128, 0.5);
    padding: 3rem;
    max-width: 500px;
    margin: 0 auto 2rem;
}
</style>
