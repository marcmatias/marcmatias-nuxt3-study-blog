<template>
  <div class="post-meta">Postado em {{ formatedDate }}</div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    formatedDate() {
      return new Date(this.post.date + "T00:00:00").toLocaleString("pt-BR", {
        dateStyle: "short",
      });
    },
  },
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
