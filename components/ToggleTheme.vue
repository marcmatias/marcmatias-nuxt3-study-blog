<template>
  <div role="button" class="section-buttons">
    <button
      role="button"
      aria-label="Toggle dark/light/system"
      @click.prevent="toggleTheme"
      class="nav-buttons"
    >
      <svg
        v-if="settedTheme === 'light'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-sun"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg
        v-else-if="settedTheme === 'dark'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-moon"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <svg
        v-else-if="settedTheme === 'system'"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-pc-display-horizontal"
        viewBox="0 0 16 16"
      >
        <path
          d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"
        />
      </svg>
      <span v-else class="nav-buttons__reticence"> ... </span>
    </button>
    <!-- <NuxtLink to="/search" class="bg-transparent">
      <button role="button" class="nav-buttons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 14 14"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>
    </NuxtLink> -->
    <NuxtLink to="/project" class="bg-transparent">
      <button role="button" class="nav-buttons">
        Projetos
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settedTheme: "",
    };
  },
  methods: {
    toggleTheme() {
      const colorMode = useColorMode();

      switch (colorMode.preference) {
        case "light":
          colorMode.preference = "dark";
          break;
        case "dark":
          colorMode.preference = "system";
          break;
        case "system":
          colorMode.preference = "light";
          break;
        default:
          colorMode.preference = "dark";
          break;
      }

      this.settedTheme = colorMode.preference;
    },
  },
  mounted() {
    this.settedTheme = useColorMode().preference;
  }
};
</script>

<style lang="scss">
.bg-transparent {
  background-color: transparent !important;
}
.nav-buttons {
  @extend .bg-transparent;
  border: 0;
  color: var(--body-color);
  font-weight: 700;
  padding-top: 0.5rem;
  cursor: pointer;

  &__reticence {
    font-size: 1.3rem;
  }

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
}
.section-buttons {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
</style>
