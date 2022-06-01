<template>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</template>

<script lang="ts">
  export default {
    components: true
  }
</script>