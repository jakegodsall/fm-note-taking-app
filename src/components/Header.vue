<template>
  <header class="bg-neutral-800 px-5 py-4">
    <!-- <img src="/images/logo.svg" /> -->
    <IconLogo />
    <nav></nav>
  </header>
</template>

<script>
import IconLogo from "./icons/IconLogo.vue";
export default {
  name: "Header",
  components: {
    IconLogo,
  },
};
</script>
