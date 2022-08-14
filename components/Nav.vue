<template>
  <header>
    <NuxtLink to="/"> Content </NuxtLink>
    <nav>
      <template v-for="(n, i) in links" :key=`navLink-${i}`>
        <NuxtLink :to="n.link">
          <div>
            <span> {{ n.name }}</span>
          </div>
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
  const links = [
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Sobre",
      link: "/",
    },
  ];
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 15%;
  font-weight: 600;

  a {
    color: var(--color-text);
    font-size: 1.2em;
    text-decoration: none;

    &:hover {
      color: var(--color-link);
    }
  }

  nav {
    display: flex;

    a {
      font-size: 1em;
      padding: 0 1rem;
      text-decoration: none;
      &:last-child {
        padding-right: 0;
        padding-left: 1rem;
      }
    }
  }
}
</style>
