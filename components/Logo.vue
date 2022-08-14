<template>
  <NuxtLink class="logo" to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      fill="currentColor"
      viewBox="0 0 16 15"
    >
      <path
        stroke="#ced8de"
        stroke-width="1"
        fill-rule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
    <span class="logo__text"> Home </span>
  </NuxtLink>
</template>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;
  padding: 0.2em 0.8em;
  background-color: transparent !important;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
